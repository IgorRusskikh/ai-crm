/*
  Warnings:

  - You are about to drop the `LoginHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OAuthAccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RefreshToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LoginHistory" DROP CONSTRAINT "LoginHistory_userId_fkey";

-- DropForeignKey
ALTER TABLE "OAuthAccount" DROP CONSTRAINT "OAuthAccount_userId_fkey";

-- DropForeignKey
ALTER TABLE "RefreshToken" DROP CONSTRAINT "RefreshToken_userId_fkey";

-- DropTable
DROP TABLE "LoginHistory";

-- DropTable
DROP TABLE "OAuthAccount";

-- DropTable
DROP TABLE "RefreshToken";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user-to-roles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "user-to-roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oauth-accounts" (
    "id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "oauth-accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refresh-token" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "refresh-token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "login-history" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "userAgent" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "login-history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phoneNumber_key" ON "users"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "oauth-accounts_providerId_key" ON "oauth-accounts"("providerId");

-- CreateIndex
CREATE UNIQUE INDEX "refresh-token_token_key" ON "refresh-token"("token");

-- AddForeignKey
ALTER TABLE "user-to-roles" ADD CONSTRAINT "user-to-roles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "oauth-accounts" ADD CONSTRAINT "oauth-accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refresh-token" ADD CONSTRAINT "refresh-token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "login-history" ADD CONSTRAINT "login-history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
