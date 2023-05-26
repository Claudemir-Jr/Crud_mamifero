/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Onca" (
    "id" SERIAL NOT NULL,
    "habitat" TEXT NOT NULL,
    "comidaFavorita" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "quantidadePatas" INTEGER NOT NULL DEFAULT 4,
    "sexo" TEXT NOT NULL,
    "hibernacao" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Onca_pkey" PRIMARY KEY ("id")
);
