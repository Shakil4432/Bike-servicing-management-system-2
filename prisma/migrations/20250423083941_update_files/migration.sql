/*
  Warnings:

  - Added the required column `completionDate` to the `service_records` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "service_records" ADD COLUMN     "completionDate" TIMESTAMP(3) NOT NULL;
