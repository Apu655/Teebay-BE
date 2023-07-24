const prisma = require("./prisma-client");

const Product = {
  getAllProducts: async () => {
    return prisma.product.findMany({
      include: { categories: true },
    });
  },
  addProduct: async (data) => {
    console.log(data);
    return await prisma.product.create({
      data: data,
    });
  },
  editProduct: async (data) => {
    try {
      const { categories, ...productData } = data;
      const category = await prisma.category.findUnique({
        where: { id: categories.id },
      });
      const categoriesListObj = await prisma.product.findUnique({
        where: {
          id: productData.id,
        },
        select: {
          categories: true,
        },
      });

      let productCategories = categoriesListObj.categories.map(
        (category) => category
      );

      productCategories.push(category);
      const updatedProduct = await prisma.product.update({
        where: { id: productData.id },
        data: {
          ...productData,
          categories: {
            set: productCategories,
          },
        },
        include: {
          categories: true,
        },
      });
      return updatedProduct;
    } catch (error) {
      console.log(error);
    }
  },

  deleteProduct: async (productId) => {
    return prisma.product.delete({
      where: { id: productId },
    });
  },
};

module.exports = Product;
