const responeTimeKey = "X-Response-Time";

// logs access along with response time
async function accesslogger(ctx, next) {
  await next();
  const rt = ctx.response.get(responeTimeKey);
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
}

// calculates response time and sets it in context
async function calcResponseTime(ctx, next) {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set(responeTimeKey, `${ms} ms`);
}

// register loggers
function logger(app) {
  app.use(accesslogger);
  app.use(calcResponseTime);
}

function generateLogger(config) {
  if (config.debug) {
    return console.log;
  }
  return () => null;
}

module.exports = logger;
module.exports.generateLogger = generateLogger;
