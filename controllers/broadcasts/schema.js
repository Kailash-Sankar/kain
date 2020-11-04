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

  type Query {
    Broadcasts: [Broadcast]
    Broadcast(id: ID): Broadcast
  }

  input NewBroadcast {
    title: String!
    description: String!
    type: String!
    date: String!
  }

  type Mutation {
    addBroadcast(message: NewBroadcast!): Broadcast!
  }
`;

module.exports = typeDefs;
