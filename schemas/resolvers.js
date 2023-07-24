const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLInputObjectType,
} = graphql;

const { Product } = require("../models");
const { ProductType, CategoryType } = require("./typeDefs");

const CategoryInputType = new GraphQLInputObjectType({
  name: "CategoryInput",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // getAllUsers: {
    //   type: new GraphQLList(UserType),
    //   resolve(parent, args) {
    //     return [1, 3, 45];
    //   },
    // },

    getAllProduct: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.getAllProducts();
      },
    },
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addProduct: {
      type: ProductType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return Product.addProduct(args);
      },
    },
    editProduct: {
      type: ProductType,
      args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLInt },
        categories: { type: CategoryInputType },
      },
      resolve(parent, args) {
        return Product.editProduct(args);
      },
    },
    deleteProduct: {
      type: ProductType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return Product.deleteProduct(args.id);
      },
    },
  },
});

module.exports = { RootQuery, Mutation };
