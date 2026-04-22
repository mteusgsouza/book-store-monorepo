/*
  Warnings:

  - Made the column `label` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `publication_date` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `publisherId` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_publisherId_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "label" SET NOT NULL,
ALTER COLUMN "publication_date" SET NOT NULL,
ALTER COLUMN "publisherId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
