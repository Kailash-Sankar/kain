const baseRouter = require("../controllers/base");
const broadcastsRouter = require("../controllers/broadcasts");
const userRouter = require("../controllers/user");

function addRoutes(app) {
  app.use(baseRouter.middleware());
  app.use(broadcastsRouter.middleware());
  app.use(userRouter.middleware());
}

module.exports = addRoutes;
