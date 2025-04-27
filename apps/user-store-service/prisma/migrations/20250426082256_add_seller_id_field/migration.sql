/*
  Warnings:

  - Added the required column `sellerId` to the `marketplace_tokens` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "user_stores_userId_storeId_idx";

-- AlterTable
ALTER TABLE "marketplace_tokens" ADD COLUMN     "sellerId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "user_stores_userId_storeId_role_idx" ON "user_stores"("userId", "storeId", "role");
