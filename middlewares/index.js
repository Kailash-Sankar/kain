const helmet = require("koa-helmet");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");
const logger = require("./logger");
const router = require("./router");
const database = require("./database");
const errorHandler = require("./errorHandling");
const graphQL = require("./graphql");

function registerMiddlewares(app) {
  // CORS with defaults
  app.use(cors());

  // security headers
  //app.use(helmet());

  // registers loggers
  logger(app);

  // parse body - json, form or text
  app.use(bodyParser());

  // adds database cursor to context
  database(app);

  // add graphql
  graphQL(app);

  // register routes
  router(app);

  // register error handler
  errorHandler(app);
}

module.exports = registerMiddlewares;
