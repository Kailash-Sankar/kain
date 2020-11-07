const broadcastResolver = require("../controllers/broadcasts/resolvers");
const userResolver = require("../controllers/user/resolvers");

module.exports = [broadcastResolver, userResolver];
