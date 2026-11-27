# CI/CD: tự động deploy lên .239

File `.github/workflows/deploy-239.yml` chạy **toàn bộ trên runner tự cài ở
server .239** (`vdd-239-verify`). Runner tự cài không tính phút GitHub
Actions.

| Bước                                   | Khi nào                                         |
| -------------------------------------- | ----------------------------------------------- |
| `npm ci`, lint, unit test, e2e, build  | Mỗi lần push hoặc pull request vào `main`       |
| `deploy/windows/Deploy.ps1`            | Push vào `main` (hoặc bấm **Run workflow**)     |

Server .239 nằm trong mạng nội bộ. Runner tự kết nối ra GitHub (chỉ cần HTTPS
đi ra), nên không cần mở cổng. Không có bí mật nào lưu trên GitHub: token
Discord, mật khẩu database và mật khẩu trang quản lý vẫn nằm trong
`C:\Deploys\discord-bot\app\.env` trên server.

Bot xác thực dùng **runner riêng** `vdd-239-verify` (thư mục
`C:\actions-runner-verify`), tách khỏi `vdd-239` (bot Vấn Đạo Đài) và
`vdd-239-filter` (bot lọc từ). Mỗi runner của tài khoản cá nhân chỉ phục vụ
một repo.

> Repo phải luôn để **private**. Với repo public, người lạ có thể gửi pull
> request chứa mã độc chạy trên runner của server.

## Deploy làm gì (bot chỉ ngắt khoảng 10 giây)

Server giữ nguyên cách bố trí cũ: thư mục `C:\Deploys\discord-bot\app`,
service NSSM `discord-bot`, cổng 3000, IIS chuyển tiếp vào cổng đó, log ở
`C:\Deploys\discord-bot\logs`.

1. **Trong lúc bot cũ vẫn chạy**, script chuẩn bị bản mới ở `app.next`: copy
   `dist`, `prisma`, `package*.json`, copy `.env` từ `app`, chạy `npm ci` và
   `prisma migrate deploy`.
2. **Chạy thử** bản mới ở cổng 3099 với Discord tắt (`DISCORD_ENABLED=false`).
   Nhờ vậy token bot không bao giờ bị dùng bởi hai tiến trình cùng lúc. Bản
   mới phải trả lời `GET /` trong 60 giây, nếu không thì dừng lại và bot cũ
   **không bị đụng tới**.
3. **Chuyển** (lúc duy nhất bot offline): dừng service, đổi tên `app` thành
   `app.previous-<thời gian>`, đổi `app.next` thành `app`, khởi động lại.
4. Chờ `GET /ping` báo `online` (tối đa 120 giây). Nếu không lên, script **tự
   quay về** bản cũ, còn bản lỗi được giữ ở `app.failed-<thời gian>` để xem.
5. Giữ 3 bản `app.previous-*` gần nhất, xoá các bản cũ hơn.

Trong lúc chuyển, ai bấm nút xác thực sẽ thấy "Tương tác thất bại" và chỉ cần
bấm lại. Migration chạy **trước** khi chuyển nên phải luôn tương thích với
bản đang chạy (chỉ thêm bảng/cột, không xoá).

Không thể chạy song song hai bản rồi chuyển qua mà không ngắt: hai tiến trình
cùng token sẽ cùng nhận lượt bấm nút, cùng cấp role và cùng trả lời
`/question`.

## Thiết lập (làm một lần)

### 1. Cài runner `vdd-239-verify` trên .239

1. Trên GitHub mở repo **discord-bot-verify → Settings → Actions → Runners →
   New self-hosted runner**, chọn **Windows / x64**. Trang này hiện lệnh tải
   runner và một **token** (hết hạn sau 1 giờ).
2. Trên .239 mở **PowerShell → Run as Administrator**. Tải runner vào thư mục
   **riêng** `C:\actions-runner-verify`:

   ```powershell
   New-Item -ItemType Directory -Force C:\actions-runner-verify | Out-Null
   Set-Location C:\actions-runner-verify
   # dán 2 lệnh Invoke-WebRequest + Expand-Archive từ trang GitHub vào đây
   ```

3. Đăng ký runner thành Windows service chạy bằng **SYSTEM** (Deploy.ps1 cần
   quyền Administrator). Thay `<TOKEN>` bằng token trên trang GitHub:

   ```powershell
   .\config.cmd --url https://github.com/lahieuphong/discord-bot-verify `
     --token <TOKEN> --name vdd-239-verify --labels vdd-239-verify --work _work `
     --runasservice --windowslogonaccount "NT AUTHORITY\SYSTEM" --unattended
   ```

4. Kiểm tra: trang **Settings → Actions → Runners** hiện `vdd-239-verify` màu
   xanh (_Idle_). Trên server:

   ```powershell
   Get-Service actions.runner.* | Format-Table Name, Status, StartType
   ```

Ngay khi runner online, GitHub chạy các lần push đang chờ, và lần chạy trên
`main` sẽ **deploy thật** (bot ngắt khoảng 10 giây).

### 2. Theo dõi

- Tab **Actions** của repo: mỗi lần push có một lần chạy **Deploy 239**. Bước
  `Deploy.ps1` in ra thời gian offline, ví dụ `Online as Xác Thực Game#3292
  after ~9 s`.
- Chạy lại bằng tay: **Actions → Deploy 239 → Run workflow** (nhánh `main`).

## Chạy tay trên server

Chuẩn bị và chạy thử bản mới **mà không dừng bot** (dùng để kiểm tra trước):

```powershell
# trong thư mục code đã `npm ci` + `npm run build`
powershell -NoProfile -ExecutionPolicy Bypass -File .\deploy\windows\Deploy.ps1 -Source (Get-Location) -PrepareOnly
```

Bỏ `-PrepareOnly` để deploy thật. Script cũ `C:\Deploys\discord-bot\scripts\deploy.ps1`
không dùng được nữa vì nó lấy code từ `\\tsclient\E\Phong_Nho_IT\discord-bot`,
đường dẫn đã không còn.

## Quay về bản trước bằng tay

```powershell
$base = 'C:\Deploys\discord-bot'
$prev = Get-ChildItem "$base\app.previous-*" -Directory | Sort-Object Name -Descending | Select-Object -First 1
C:\tools\nssm\win64\nssm.exe stop discord-bot
Rename-Item "$base\app" "app.rolledback-$(Get-Date -Format yyyyMMdd-HHmmss)"
Rename-Item $prev.FullName 'app'
C:\tools\nssm\win64\nssm.exe start discord-bot
```

## Gỡ runner

```powershell
Set-Location C:\actions-runner-verify
.\config.cmd remove --token <TOKEN-xoá-lấy-ở-trang-Runners>
```
