/*
  Warnings:

  - You are about to drop the column `completionDate` on the `service_records` table. All the data in the column will be lost.
  - Added the required column `serviceDate` to the `service_records` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "service_records" DROP COLUMN "completionDate",
ADD COLUMN     "serviceDate" TIMESTAMP(3) NOT NULL;
