-- CreateTable
CREATE TABLE "gemini_requests" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "key_fingerprint" VARCHAR(16) NOT NULL,
    "model" VARCHAR(100) NOT NULL,
    "source" VARCHAR(16) NOT NULL,
    "requester" VARCHAR(100),
    "ok" BOOLEAN NOT NULL,
    "input_tokens" INTEGER,
    "output_tokens" INTEGER,
    "total_tokens" INTEGER,
    "duration_ms" INTEGER NOT NULL,
    "error_status" INTEGER,
    "error_kind" VARCHAR(32),
    "error_message" VARCHAR(500),
    "quota_id" VARCHAR(200),
    "quota_value" INTEGER,
    "retry_after_sec" INTEGER,

    CONSTRAINT "gemini_requests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "gemini_requests_key_fingerprint_created_at_idx" ON "gemini_requests"("key_fingerprint", "created_at");

-- CreateIndex
CREATE INDEX "gemini_requests_created_at_idx" ON "gemini_requests"("created_at");
