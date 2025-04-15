/*
  Warnings:

  - You are about to drop the column `ownerId` on the `stores` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `stores` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `stores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `user_stores` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StoreRole" AS ENUM ('OWNER', 'ADMIN', 'MANAGER', 'VIEWER');

-- DropForeignKey
ALTER TABLE "stores" DROP CONSTRAINT "stores_ownerId_fkey";

-- AlterTable
ALTER TABLE "stores" DROP COLUMN "ownerId",
ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user_stores" ADD COLUMN     "role" "StoreRole" NOT NULL;

-- CreateIndex
CREATE INDEX "marketplace_tokens_storeId_marketplace_idx" ON "marketplace_tokens"("storeId", "marketplace");

-- CreateIndex
CREATE UNIQUE INDEX "stores_slug_key" ON "stores"("slug");

-- CreateIndex
CREATE INDEX "stores_id_idx" ON "stores"("id");

-- CreateIndex
CREATE INDEX "stores_slug_idx" ON "stores"("slug");

-- CreateIndex
CREATE INDEX "user_stores_userId_storeId_idx" ON "user_stores"("userId", "storeId");

-- CreateIndex
CREATE INDEX "users_id_idx" ON "users"("id");

-- CreateIndex
CREATE INDEX "users_authId_idx" ON "users"("authId");

-- CreateIndex
CREATE INDEX "users_phoneNumber_idx" ON "users"("phoneNumber");

-- AddForeignKey
ALTER TABLE "user_stores" ADD CONSTRAINT "user_stores_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_stores" ADD CONSTRAINT "user_stores_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
