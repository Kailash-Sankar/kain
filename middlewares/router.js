const baseRouter = require("../controllers/base");
const broadcastsRouter = require("../controllers/broadcasts");

function addRoutes(app) {
  app.use(baseRouter.middleware());
  app.use(broadcastsRouter.middleware());
}

module.exports = addRoutes;
