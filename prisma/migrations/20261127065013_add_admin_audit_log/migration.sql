-- CreateTable
CREATE TABLE "admin_audit_log" (
    "id" SERIAL NOT NULL,
    "at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "source" VARCHAR(16) NOT NULL,
    "action" VARCHAR(32) NOT NULL,
    "actor" VARCHAR(120),
    "ip" VARCHAR(64),
    "detail" VARCHAR(300),

    CONSTRAINT "admin_audit_log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "admin_audit_log_at_idx" ON "admin_audit_log"("at");

-- CreateIndex
CREATE INDEX "admin_audit_log_action_id_idx" ON "admin_audit_log"("action", "id");
