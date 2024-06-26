/*
  Warnings:

  - Added the required column `total_attendant` to the `BibleStudyGroup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `BibleStudyGroup` ADD COLUMN `total_attendant` INTEGER NOT NULL;
