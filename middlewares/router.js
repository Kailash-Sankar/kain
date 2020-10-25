const baseRouter = require("../controllers/base");
const todosRouter = require("../controllers/todos");

function addRoutes(app) {
  app.use(baseRouter.middleware());
  app.use(todosRouter.middleware());
}

module.exports = addRoutes;
