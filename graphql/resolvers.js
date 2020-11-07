const broadcastResolver = require("../controllers/broadcasts/resolvers");
const userResolver = require("../controllers/user/resolvers");
const auditResolver = require("../controllers/audit/resolvers");

module.exports = [broadcastResolver, userResolver, auditResolver];
