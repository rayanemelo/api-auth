/*
  Warnings:

  - You are about to drop the column `acessLevel` on the `User` table. All the data in the column will be lost.
  - Added the required column `accessLevel` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AccessLevel" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "acessLevel",
ADD COLUMN     "accessLevel" "AccessLevel" NOT NULL;

-- DropEnum
DROP TYPE "AcessLevel";
