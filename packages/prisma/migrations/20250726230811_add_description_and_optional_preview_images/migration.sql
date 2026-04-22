-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "description" TEXT,
ADD COLUMN     "genre" TEXT,
ADD COLUMN     "preview_images" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "type_of_work" TEXT;
