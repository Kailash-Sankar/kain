const { ApolloServer, gql } = require("apollo-server-koa");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

function setupGraphQL(app) {
  server.applyMiddleware({ app });
  console.log("GraphQL running at", server.graphqlPath);
}

module.exports = setupGraphQL;
