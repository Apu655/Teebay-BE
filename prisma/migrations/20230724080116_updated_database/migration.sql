-- CreateTable
CREATE TABLE "RentDetail" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "productId" INTEGER,
    "userId" INTEGER,

    CONSTRAINT "RentDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RentDetail_productId_key" ON "RentDetail"("productId");

-- AddForeignKey
ALTER TABLE "RentDetail" ADD CONSTRAINT "RentDetail_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentDetail" ADD CONSTRAINT "RentDetail_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
