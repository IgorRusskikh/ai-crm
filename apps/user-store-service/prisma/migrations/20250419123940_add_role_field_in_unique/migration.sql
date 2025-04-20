/*
  Warnings:

  - A unique constraint covering the columns `[userId,storeId,role]` on the table `user_stores` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "user_stores_userId_storeId_key";

-- CreateIndex
CREATE UNIQUE INDEX "user_stores_userId_storeId_role_key" ON "user_stores"("userId", "storeId", "role");
