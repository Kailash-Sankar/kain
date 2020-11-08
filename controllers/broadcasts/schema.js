const { gql } = require("apollo-server-koa");

const typeDefs = gql`
  type Broadcast {
    id: ID!
    title: String!
    description: String!
    type: String!
    date: String!
    created_at: String!
    updated_at: String!
  }

  input NewBroadcast {
    title: String!
    description: String!
    type: String!
    date: String!
  }
`;

module.exports = typeDefs;
