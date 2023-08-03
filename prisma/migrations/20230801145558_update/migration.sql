/*
  Warnings:

  - You are about to drop the column `totalPrice` on the `PurchaseDetail` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `SellDetail` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LentDetail" ALTER COLUMN "totalPrice" DROP NOT NULL;

-- AlterTable
ALTER TABLE "PurchaseDetail" DROP COLUMN "totalPrice";

-- AlterTable
ALTER TABLE "SellDetail" DROP COLUMN "totalPrice";
