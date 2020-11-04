const baseRouter = require("../controllers/base");
const broadcastsRouter = require("../controllers/broadcasts");
const userRouter = require("../controllers/user");
const alertRouter = require("../controllers/alert");

function addRoutes(app) {
  app.use(baseRouter.middleware());
  app.use(broadcastsRouter.middleware());
  app.use(userRouter.middleware());
  app.use(alertRouter.middleware());
}

module.exports = addRoutes;
