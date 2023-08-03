const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
} = graphql;

const CategoryType = require("./CategoryType");

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    createdBy: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    rentPrice: { type: GraphQLFloat },
    rentType: { type: GraphQLString },
    price: { type: GraphQLFloat },
    categories: { type: new GraphQLList(CategoryType) },
  }),
});

module.exports = ProductType;
