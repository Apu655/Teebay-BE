require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const app = express();
const graphql = require("graphql");
const { RootQuery, Mutation } = require("./schemas/resolvers");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLFloat,
} = graphql;
const { graphqlHTTP } = require("express-graphql");

const updateProduct = async (productId) => {
  try {
    const updateProduct = await prisma.product.update({
      where: { id: productId },
      data: {
        categories: {
          connect: [{ id: 3 }],
        },
      },
    });
    console.log("Updated", updateProduct);
  } catch (error) {
    console.log(error);
  }
};
async function createProduct() {
  try {
    const newProduct = await prisma.product.create({
      data: {
        name: "Laptop",
        description: "Laptop that works very well has some good processor",
        price: 1000,
      },
    });
    console.log(newProduct);
  } catch (error) {
    console.log(error);
  }
}
const getAllProduct = async () => {
  try {
    const getAllProduct = await prisma.product.findMany({
      include: { categories: true },
    });
    console.log(getAllProduct[0]);
  } catch (error) {
    console.log(error);
  }
};
const createCategory = async () => {
  try {
    const newCategory = await prisma.category.create({
      data: {
        name: "Outdoor",
      },
    });
    console.log(newCategory);
  } catch (error) {
    console.log(error);
  }
};
// createProduct();
// createCategory();
// updateProduct(1);
// getAllProduct();

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});
const CategoryType = new GraphQLObjectType({
  name: "Category",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }),
});
const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat },
    categories: { type: new GraphQLList(CategoryType) },
  }),
});
// const RootQuery = new GraphQLObjectType({
//   name: "RootQueryType",
//   fields: {
//     getAllUsers: {
//       type: new GraphQLList(UserType),
//       resolve(parent, args) {
//         return [1, 3, 45];
//       },
//     },
//     getAllProduct: {
//       type: new GraphQLList(ProductType),
//       resolve(parent, args) {
//         return prisma.product.findMany({
//           include: {
//             categories: true,
//           },
//         });
//       },
//     },
//   },
// });
// const Mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     createUser: {
//       type: UserType,
//       args: {
//         firstName: { type: GraphQLString },
//         lastName: { type: GraphQLString },
//         email: { type: GraphQLString },
//         password: { type: GraphQLString },
//       },
//       resolve(parent, args) {
//         // logic to create prisma.create.user
//       },
//     },
//   },
// });
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
});
