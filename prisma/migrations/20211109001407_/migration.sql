/*
  Warnings:

  - Changed the type of `year` on the `Movie` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `length` on the `Movie` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "year",
ADD COLUMN     "year" TIMESTAMP(3) NOT NULL,
DROP COLUMN "length",
ADD COLUMN     "length" TIMESTAMP(3) NOT NULL;
