const { gql } = require("apollo-server-koa");

const typeDefs = gql`
  type Audit {
    id: ID!
    type: String!
    type_id: Int!
    status: Int!
    created_at: String!
    updated_at: String!
  }
`;

module.exports = typeDefs;
