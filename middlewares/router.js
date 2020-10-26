const baseRouter = require("../controllers/base");
const messagesRouter = require("../controllers/messages");

function addRoutes(app) {
  app.use(baseRouter.middleware());
  app.use(messagesRouter.middleware());
}

module.exports = addRoutes;
