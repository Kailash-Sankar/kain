const baseRouter = require("../controllers/base");
const broadcastsRouter = require("../controllers/broadcasts");
const userRouter = require("../controllers/user");
const screenshotRouter = require("../controllers/screenshot");

function addRoutes(app) {
  app.use(baseRouter.middleware());
  app.use(broadcastsRouter.middleware());
  app.use(userRouter.middleware());
  app.use(screenshotRouter.middleware());
}

module.exports = addRoutes;
