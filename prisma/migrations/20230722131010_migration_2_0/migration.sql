/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
CREATE SEQUENCE category_id_seq;
ALTER TABLE "Category" ALTER COLUMN "id" SET DEFAULT nextval('category_id_seq');
ALTER SEQUENCE category_id_seq OWNED BY "Category"."id";

-- AlterTable
CREATE SEQUENCE product_id_seq;
ALTER TABLE "Product" ALTER COLUMN "id" SET DEFAULT nextval('product_id_seq');
ALTER SEQUENCE product_id_seq OWNED BY "Product"."id";

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");
