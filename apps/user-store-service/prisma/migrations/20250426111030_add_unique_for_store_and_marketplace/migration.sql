/*
  Warnings:

  - You are about to drop the column `token` on the `marketplace_tokens` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[storeId,marketplace]` on the table `marketplace_tokens` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `encryptedToken` to the `marketplace_tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iv` to the `marketplace_tokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "marketplace_tokens" DROP COLUMN "token",
ADD COLUMN     "encryptedToken" TEXT NOT NULL,
ADD COLUMN     "encryptionVersion" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "iv" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "marketplace_tokens_storeId_marketplace_key" ON "marketplace_tokens"("storeId", "marketplace");
