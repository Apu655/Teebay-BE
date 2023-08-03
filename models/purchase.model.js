const prisma = require("./prisma-client");

const Purchase = {
  buyProduct: async (purchaseDetails) => {
    try {
      const purchaseDetail = await prisma.purchaseDetail.create({
        data: purchaseDetails,
      });
      const { productId } = purchaseDetail;
      const productDetail = await prisma.product.findUnique({
        where: { id: productId },
      });
      const sellDetail = await prisma.sellDetail.create({
        data: {
          productId: productDetail.id,
          userId: productDetail.createdBy,
        },
      })
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = Purchase;
