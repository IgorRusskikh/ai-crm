/*
  Warnings:

  - You are about to drop the column `encryptionVersion` on the `marketplace_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `iv` on the `marketplace_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `sellerId` on the `marketplace_tokens` table. All the data in the column will be lost.
  - Added the required column `encryptedSellerId` to the `marketplace_tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellerIdIv` to the `marketplace_tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tokenIv` to the `marketplace_tokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "marketplace_tokens" DROP COLUMN "encryptionVersion",
DROP COLUMN "iv",
DROP COLUMN "sellerId",
ADD COLUMN     "encryptedSellerId" TEXT NOT NULL,
ADD COLUMN     "sellerIdEncryptionVersion" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "sellerIdIv" TEXT NOT NULL,
ADD COLUMN     "tokenEncryptionVersion" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "tokenIv" TEXT NOT NULL;
