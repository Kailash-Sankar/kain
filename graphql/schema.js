const { gql } = require("apollo-server-koa");
const broadcastSchema = require("../controllers/broadcasts/schema");
const userSchema = require("../controllers/user/schema");
const auditSchema = require("../controllers/audit/schema");

const typeDefs = gql`
  type Query {
    broadcasts: [Broadcast]
    broadcast(id: ID): Broadcast
    users: [User]
    user(id: ID): User
    audit: [Audit]
  }
  type Mutation {
    addBroadcast(message: NewBroadcast!): Broadcast!
  }
`;

module.exports = [broadcastSchema, userSchema, auditSchema, typeDefs];
