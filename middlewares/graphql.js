const { ApolloServer, gql } = require("apollo-server-koa");

const typeDefs = require("../graphql/schema");
const resolvers = require("../graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ ctx }) => ctx,
});

function setupGraphQL(app) {
  server.applyMiddleware({ app });
  console.log("GraphQL running at", server.graphqlPath);
}

module.exports = setupGraphQL;
