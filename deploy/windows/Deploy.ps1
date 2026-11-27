<#
.SYNOPSIS
  Deploys discord-bot (the member verification bot) on the .239 server
  with as little downtime as possible.

.DESCRIPTION
  Layout on the server (unchanged from the original manual setup):
    C:\Deploys\discord-bot\app       the running app (.env, dist, node_modules, prisma)
    C:\Deploys\discord-bot\logs      out.log / err.log written by NSSM
    NSSM service "discord-bot"       node app\dist\main.js, HTTP port 3000 (IIS proxies to it)

  While the old bot keeps running, everything is prepared in app.next:
  copy the build, npm ci, prisma migrate deploy, and a smoke start on a spare
  port with Discord disabled (so the bot token is never used twice). Only then
  is the service stopped, app.next swapped in and the service started again
  (~10 s offline). If /ping does not report "online" in time, the previous app
  folder is put back automatically.

  Run from an elevated PowerShell, or from the self-hosted GitHub runner
  (it runs as SYSTEM). Source must contain a finished `npm run build`.
#>
[CmdletBinding()]
param(
  [Parameter(Mandatory = $true)][string]$Source,
  [string]$Base = 'C:\Deploys\discord-bot',
  [string]$Service = 'discord-bot',
  [int]$Port = 3000,
  [int]$SmokePort = 3099,
  [int]$HealthTimeoutSec = 120,
  [int]$KeepPrevious = 3,
  [string]$Nssm = 'C:\tools\nssm\win64\nssm.exe',
  # Only prepare app.next and smoke-test it; never stops the running bot.
  [switch]$PrepareOnly
)

$ErrorActionPreference = 'Stop'
$app = Join-Path $Base 'app'
$next = Join-Path $Base 'app.next'
$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$previous = Join-Path $Base "app.previous-$stamp"

function Step([string]$text) { Write-Host "==> $text" }

function Robo {
  robocopy @args /R:2 /W:2 /NP /NFL /NDL /NJH /NJS | Out-Null
  if ($LASTEXITCODE -ge 8) { throw "robocopy failed, exit code $LASTEXITCODE" }
  $global:LASTEXITCODE = 0
}

function Invoke-Native([string]$what, [scriptblock]$command) {
  & $command
  if ($LASTEXITCODE -ne 0) { throw "$what failed (exit code $LASTEXITCODE)" }
}

function Get-Json([string]$url) {
  try {
    return Invoke-RestMethod -Uri $url -TimeoutSec 5 -UseBasicParsing
  } catch {
    return $null
  }
}

function Stop-Bot {
  & $Nssm stop $Service | Out-Null
  $deadline = (Get-Date).AddSeconds(60)
  while ((Get-Service $Service).Status -ne 'Stopped') {
    if ((Get-Date) -gt $deadline) { throw "Service $Service did not stop within 60 s" }
    Start-Sleep -Milliseconds 500
  }
}

function Start-Bot {
  & $Nssm start $Service | Out-Null
}

function Wait-Online([int]$timeoutSec) {
  $deadline = (Get-Date).AddSeconds($timeoutSec)
  while ((Get-Date) -lt $deadline) {
    $ping = Get-Json "http://127.0.0.1:$Port/ping"
    if ($ping -and $ping.status -eq 'online') { return $ping }
    Start-Sleep -Seconds 2
  }
  return $null
}

# --- Checks -----------------------------------------------------------------
$identity = [Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()
if (-not $PrepareOnly) {
  if (-not $identity.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    throw 'Run this script as Administrator (or from the SYSTEM runner).'
  }
  if (-not (Test-Path $Nssm)) { throw "NSSM not found at $Nssm" }
  if (-not (Get-Service $Service -ErrorAction SilentlyContinue)) { throw "Service $Service does not exist" }
}
if (-not (Test-Path "$app\.env")) { throw "Missing $app\.env" }
foreach ($required in 'dist\main.js', 'prisma\schema.prisma', 'package.json', 'package-lock.json', 'prisma7.config.ts') {
  if (-not (Test-Path (Join-Path $Source $required))) { throw "Missing $required in $Source (run npm run build first)" }
}

# --- Prepare app.next while the old bot keeps running -------------------------
Step "Preparing $next (the bot keeps running)"
if (Test-Path $next) { Remove-Item -Recurse -Force $next }
New-Item -ItemType Directory -Force $next | Out-Null
Robo $Source $next package.json package-lock.json prisma7.config.ts
Robo (Join-Path $Source 'dist') (Join-Path $next 'dist') /MIR
Robo (Join-Path $Source 'prisma') (Join-Path $next 'prisma') /MIR
Copy-Item "$app\.env" "$next\.env" -Force

Push-Location $next
try {
  Step 'npm ci'
  Invoke-Native 'npm ci' { npm.cmd ci --no-audit --no-fund }
  Step 'prisma migrate deploy'
  Invoke-Native 'prisma migrate deploy' { npx.cmd prisma migrate deploy }
} finally {
  Pop-Location
}

# Smoke start: same .env and database, but Discord off and a spare port, so it
# cannot clash with the running bot. Environment variables win over .env.
Step "Smoke start on port $SmokePort (Discord disabled)"
if (Get-Json "http://127.0.0.1:$SmokePort/") { throw "Port $SmokePort is already in use; pass -SmokePort with a free port" }
New-Item -ItemType Directory -Force (Join-Path $Base 'logs') | Out-Null
$saved = @{ PORT = $env:PORT; DISCORD_ENABLED = $env:DISCORD_ENABLED }
$env:PORT = "$SmokePort"
$env:DISCORD_ENABLED = 'false'
$smokeLog = Join-Path $Base "logs\smoke-$stamp.log"
$nodeExe = (Get-Command node.exe -ErrorAction SilentlyContinue).Source
if (-not $nodeExe) { $nodeExe = 'C:\Program Files\nodejs\node.exe' }
$smoke = Start-Process -FilePath $nodeExe -ArgumentList 'dist\main.js' -WorkingDirectory $next `
  -RedirectStandardOutput $smokeLog -RedirectStandardError "$smokeLog.err" -PassThru -WindowStyle Hidden
$env:PORT = $saved.PORT
$env:DISCORD_ENABLED = $saved.DISCORD_ENABLED
try {
  $healthy = $false
  $deadline = (Get-Date).AddSeconds(60)
  while ((Get-Date) -lt $deadline -and -not $smoke.HasExited) {
    $health = Get-Json "http://127.0.0.1:$SmokePort/"
    if ($health -and $health.status -eq 'ok') { $healthy = $true; break }
    Start-Sleep -Seconds 1
  }
} finally {
  if (-not $smoke.HasExited) { Stop-Process -Id $smoke.Id -Force }
}
if (-not $healthy) {
  Get-Content $smokeLog, "$smokeLog.err" -Tail 30 -ErrorAction SilentlyContinue
  throw 'The new build did not start (smoke test). The running bot was not touched.'
}
Remove-Item $smokeLog, "$smokeLog.err" -ErrorAction SilentlyContinue
Step 'Smoke start OK'

if ($PrepareOnly) {
  Step "PrepareOnly: the new version is ready in $next; the running bot was not touched."
  return
}

# --- Switch (the only moment the bot is offline) ------------------------------
Step "Switching: stop $Service, swap folders, start"
Copy-Item "$app\.env" "$next\.env" -Force   # pick up any .env edit made meanwhile
$switchStarted = Get-Date
try {
  Stop-Bot
} catch {
  Start-Bot
  throw "Could not stop $Service; it was started again and nothing was changed. $_"
}
try {
  Rename-Item $app (Split-Path $previous -Leaf)
  try {
    Rename-Item $next 'app'
  } catch {
    Rename-Item $previous 'app'
    throw
  }
} catch {
  Start-Bot
  throw "Could not swap the app folders; the previous version was started again. $_"
}
Start-Bot

$ping = Wait-Online $HealthTimeoutSec
if (-not $ping) {
  Write-Warning "The new version did not report online within $HealthTimeoutSec s. Rolling back."
  Stop-Bot
  Rename-Item $app "app.failed-$stamp"
  Rename-Item $previous 'app'
  Start-Bot
  if (Wait-Online $HealthTimeoutSec) {
    throw "Deploy failed and was rolled back; the previous version is online. The failed build is in $Base\app.failed-$stamp (see logs\err.log)."
  }
  throw 'Deploy failed AND the rollback did not come online. Check logs\err.log now.'
}
$offline = [int]((Get-Date) - $switchStarted).TotalSeconds
Step "Online as $($ping.bot.tag) after ~$offline s"

# --- Clean up old copies -------------------------------------------------------
Get-ChildItem $Base -Directory -Filter 'app.previous-*' |
  Sort-Object Name -Descending |
  Select-Object -Skip $KeepPrevious |
  ForEach-Object { Step "Removing old $($_.Name)"; Remove-Item -Recurse -Force $_.FullName }

Step "Done. Previous version kept in $previous"
