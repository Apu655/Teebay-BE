const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLFloat } = graphql;

const ProductType = require("./ProductType.js");
const UserType = require("./UserType.js");

const SellType = new GraphQLObjectType({
  name: "Sell",
  fields: () => ({
    id: { type: GraphQLInt },
    totalPrice: { type: GraphQLFloat },
    product: { type: ProductType },
    productId: { type: GraphQLInt },
    user: { type: UserType },
    userId: { type: GraphQLInt },
  }),
});

module.exports = SellType;
