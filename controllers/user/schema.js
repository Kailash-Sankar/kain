const { gql } = require("apollo-server-koa");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    active: Boolean!
    created_at: String!
    updated_at: String!
  }
`;

module.exports = typeDefs;
