const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLInputObjectType,
  GraphQLFloat,
} = graphql;

const { Product, User } = require("../models");
const { ProductType, UserType, CategoryType } = require("./typeDefs");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // getAllUsers: {
    //   type: new GraphQLList(UserType),
    //   resolve(parent, args) {
    //     return [1, 3, 45];
    //   },
    // },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        return User.login(args);
      },
    },
    getProductByCreator: {
      type: new GraphQLList(ProductType),
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return Product.getProductByCreator(args);
      },
    },
    getAllProduct: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.getAllProducts();
      },
    },
    getProductById: {
      type: ProductType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        console.log("ARGS:", args);
        return Product.getProductById(args);
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
        price: { type: GraphQLFloat },
        rentPrice: { type: GraphQLFloat },
        createdBy: { type: GraphQLInt },
        categories: { type: new GraphQLList(GraphQLString) },
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
        rentPrice: { type: GraphQLFloat },
        categories: { type: new GraphQLList(GraphQLString) },
      },
      resolve(parent, args) {
        console.log("Update ARGS:", args);
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
    createUser: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
      },
      resolve(parent, args) {
        return User.createUser(args);
      },
    },
  },
});

module.exports = { RootQuery, Mutation };
