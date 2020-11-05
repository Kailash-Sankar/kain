const Koa = require("koa");
const config = require("./config");
const registerMiddlewares = require("./middlewares");
const app = new Koa();
const initScheduler = require("./scheduler");

// add essential middlewares
registerMiddlewares(app);

app.listen(config.server.port, () => {
  console.log(`Started with config: ${JSON.stringify(config)}`);
});

initScheduler(config.scheduler);
