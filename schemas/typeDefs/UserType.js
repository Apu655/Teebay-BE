const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLList,
} = graphql;

// const ProductType = require("./ProductType");
// const RentType = require("./RentType");
// const SellType = require("./SellType");
// const PurchaseType = require("./PurchaseType");
// const LentType = require("./LentType");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    address: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    rentList: { type: new GraphQLList(require("./RentType")) },
    LentDetail: { type: new GraphQLList(require("./SellType")) },
    PurchaseDetail: { type: new GraphQLList(require("./PurchaseType")) },
    SellDetail: { type: new GraphQLList(require("./LentType")) },
  }),
});

module.exports = UserType;
