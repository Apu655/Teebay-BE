const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLInputObjectType,
  GraphQLFloat,
} = graphql;

const { Product, User, Purchase, Rent } = require("../models");
const {
  ProductType,
  UserType,
  CategoryType,
  PurchaseType,
  RentType,
} = require("./typeDefs");

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
    getUserDetails: {
      type: UserType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        console.log("ARGS for user details", args);
        return User.getUserDetails(args);
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
        rentType: { type: GraphQLString },
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
        price: { type: GraphQLFloat },
        rentType: { type: GraphQLString },
        rentPrice: { type: GraphQLFloat },
        categories: { type: new GraphQLList(GraphQLString) },
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
    buyProduct: {
      type: PurchaseType,
      args: {
        productId: { type: GraphQLInt },
        userId: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return Purchase.buyProduct(args);
      },
    },
    rentProduct: {
      type: RentType,
      args: {
        productId: { type: GraphQLInt },
        userId: { type: GraphQLInt },
        startDate: { type: GraphQLString },
        endDate: { type: GraphQLString },
      },
      resolve(parent, args) {
        console.log(args);
        return Rent.rentProduct(args);
      },
    },
    createUser: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        address: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
      },
      resolve(parent, args) {
        return User.createUser(args);
      },
    },
  },
});

module.exports = { RootQuery, Mutation };
