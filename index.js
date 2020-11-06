const serve = require("koa-static");
const Koa = require("koa");
const dotenv = require("dotenv");
const path = require("path");
const config = require("./config");
const registerMiddlewares = require("./middlewares");
const app = new Koa();
const initScheduler = require("./scheduler");
const initMocker = require("./mock");

const ENV_FILE = path.join(__dirname, `.env.${process.env.NODE_ENV}`);
dotenv.config({ path: ENV_FILE });

console.log("dotenv", process.env.NODE_ENV);

app.use(serve(__dirname + "/public"));
// add essential middlewares
registerMiddlewares(app);
const port = process.env.PORT || config.server.port;
app.listen(port, () => {
  console.log(
    `Started with config: ${JSON.stringify(config)} on port: ${port}`
  );
});

initScheduler(config.scheduler);

initMocker(config.mock);
