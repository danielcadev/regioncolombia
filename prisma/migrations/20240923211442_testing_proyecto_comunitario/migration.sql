/*
  Warnings:

  - You are about to drop the column `content1` on the `ProyectoComunitario` table. All the data in the column will be lost.
  - You are about to drop the column `content2` on the `ProyectoComunitario` table. All the data in the column will be lost.
  - You are about to drop the column `content3` on the `ProyectoComunitario` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `ProyectoComunitario` table. All the data in the column will be lost.
  - You are about to drop the column `image1` on the `ProyectoComunitario` table. All the data in the column will be lost.
  - You are about to drop the column `image2` on the `ProyectoComunitario` table. All the data in the column will be lost.
  - You are about to drop the column `mainImage` on the `ProyectoComunitario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProyectoComunitario" DROP COLUMN "content1",
DROP COLUMN "content2",
DROP COLUMN "content3",
DROP COLUMN "description",
DROP COLUMN "image1",
DROP COLUMN "image2",
DROP COLUMN "mainImage";
