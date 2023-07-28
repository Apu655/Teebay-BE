require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
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
