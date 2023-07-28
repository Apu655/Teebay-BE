const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
} = graphql;

const ProductType = require("./ProductType.js");
const UserType = require("./UserType.js");

const PurchaseType = new GraphQLObjectType({
  name: "Purchase",
  fields: () => ({
    id: { type: GraphQLInt },
    totalPrice: { type: GraphQLFloat },
    product: { type: ProductType },
    productId: { type: GraphQLInt },
    user: { type: UserType },
    userId: { type: GraphQLInt },
  }),
});

module.exports = PurchaseType;
