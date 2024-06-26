/*
  Warnings:

  - Added the required column `biblestudy_id` to the `Registration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Registration` ADD COLUMN `biblestudy_id` VARCHAR(191) NOT NULL;
