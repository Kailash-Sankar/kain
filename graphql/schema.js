const { gql } = require("apollo-server-koa");
const broadcastSchema = require("../controllers/broadcasts/schema");
const userSchema = require("../controllers/user/schema");

const typeDefs = gql`
  type Query {
    Broadcasts: [Broadcast]
    Broadcast(id: ID): Broadcast
    Users: [User]
    User(id: ID): User
  }
  type Mutation {
    addBroadcast(message: NewBroadcast!): Broadcast!
  }
`;

module.exports = [broadcastSchema, userSchema, typeDefs];
