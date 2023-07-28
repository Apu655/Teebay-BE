const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat } = graphql;

const ProductType = require("./ProductType.js");
const UserType = require("./UserType.js");

const RentType = new GraphQLObjectType({
  name: "Rent",
  fields: () => ({
    id: { type: GraphQLInt },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    totalPrice: { type: GraphQLFloat },
    product: { type: ProductType },
    productId: { type: GraphQLInt },
    user: { type: UserType },
    userId: { type: GraphQLInt },
  }),
});

module.exports = RentType;
