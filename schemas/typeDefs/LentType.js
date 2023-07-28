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

const LentType = new GraphQLObjectType({
  name: "Lent",
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

module.exports = LentType;
