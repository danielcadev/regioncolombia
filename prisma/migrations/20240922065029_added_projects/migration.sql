-- CreateTable
CREATE TABLE "ProyectoComunitario" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "zona" TEXT NOT NULL,
    "mainImage" TEXT,
    "content1" TEXT,
    "image1" TEXT,
    "content2" TEXT,
    "image2" TEXT,
    "content3" TEXT,
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProyectoComunitario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProyectoComunitario_slug_key" ON "ProyectoComunitario"("slug");

-- AddForeignKey
ALTER TABLE "ProyectoComunitario" ADD CONSTRAINT "ProyectoComunitario_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
