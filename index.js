const Koa = require("koa");
const cors = require("@koa/cors");
const helmet = require("koa-helmet");
const bodyParser = require("koa-bodyparser");
const config = require("./config");
const logger = require("./logger");
const router = require("./router");

const app = new Koa();

// security headers
app.use(helmet());

// CORS with defaults
app.use(cors());

// parse body - json, form or text
app.use(bodyParser());

// registers loggers
logger(app);

// register routes
router(app);

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });

// app.use(async (ctx) => {
//   ctx.body = "Main" + JSON.stringify(ctx.request.body);
//   await delay(2000);
// });

app.listen(config.server.port, () => {
  console.log(`started server with conf: ${JSON.stringify(config)}`);
});
