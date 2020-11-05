const serve = require("koa-static");
const Koa = require("koa");
const dotenv = require('dotenv');
const path = require('path');
const config = require("./config");
const registerMiddlewares = require("./middlewares");
const app = new Koa();
const initScheduler = require("./scheduler");

const ENV_FILE = path.join(__dirname, '.env');
dotenv.config({ path: ENV_FILE });

app.use(serve(__dirname + '/public'));
// add essential middlewares
registerMiddlewares(app);

app.listen(config.server.port, () => {
  console.log(`Started with config: ${JSON.stringify(config)}`);
});

initScheduler(config.scheduler);
