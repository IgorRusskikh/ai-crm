/*
  Warnings:

  - You are about to drop the column `storeId` on the `marketplace_tokens` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[storeSlug,marketplace]` on the table `marketplace_tokens` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `storeSlug` to the `marketplace_tokens` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "marketplace_tokens" DROP CONSTRAINT "marketplace_tokens_storeId_fkey";

-- DropIndex
DROP INDEX "marketplace_tokens_storeId_marketplace_idx";

-- DropIndex
DROP INDEX "marketplace_tokens_storeId_marketplace_key";

-- AlterTable
ALTER TABLE "marketplace_tokens" DROP COLUMN "storeId",
ADD COLUMN     "storeSlug" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "marketplace_tokens_storeSlug_marketplace_idx" ON "marketplace_tokens"("storeSlug", "marketplace");

-- CreateIndex
CREATE UNIQUE INDEX "marketplace_tokens_storeSlug_marketplace_key" ON "marketplace_tokens"("storeSlug", "marketplace");

-- AddForeignKey
ALTER TABLE "marketplace_tokens" ADD CONSTRAINT "marketplace_tokens_storeSlug_fkey" FOREIGN KEY ("storeSlug") REFERENCES "stores"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
