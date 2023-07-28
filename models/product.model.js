const prisma = require("./prisma-client");

const Product = {
  getAllProducts: async () => {
    const products = await prisma.product.findMany({
      include: { categories: true },
    });
    return products;
  },
  getProductByCreator: async ({ id }) => {
    const products = await prisma.product.findMany({
      where: {
        createdBy: id,
      },
      include: {
        categories: true,
      },
    });

    return products;
  },
  getProductById: async ({ id }) => {
    const productId = parseInt(id);
    const product = await prisma.product.findUnique({
      where: { id: productId },
      include: {
        categories: {
          select: {
            id: true,
          },
        },
      },
    });

    return product;
  },
  addProduct: async (data) => {
    const { categories, ...productData } = data;
    try {
      return await prisma.product.create({
        data: {
          ...productData,
          categories: {
            connect: categories.map((id) => ({
              id: parseInt(id),
            })),
          },
        },
      });
    } catch (error) {
      console.log("Error:", error);
    }
  },
  editProduct: async (data) => {
    try {
      const { categories, ...productData } = data;
      const updatedProduct = await prisma.product.update({
        where: { id: productData.id },
        data: {
          ...productData,
          categories: {
            connect: categories.map((id) => ({
              id: parseInt(id),
            })),
          },
        },
      });
      return updatedProduct;
      // const categoriesListObj = await prisma.product.findUnique({
      //   where: {
      //     id: productData.id,
      //   },
      //   select: {
      //     categories: true,
      //   },
      // });

      // let productCategories = categoriesListObj.categories.map(
      //   (category) => category
      // );

      // productCategories.push(category);
      // const updatedProduct = await prisma.product.update({
      //   where: { id: productData.id },
      //   data: {
      //     ...productData,
      //     categories: {
      //       set: productCategories,
      //     },
      //   },
      // });
      // return updatedProduct;
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
