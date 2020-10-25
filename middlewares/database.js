const knex = require("knex");
const dbConfig = require("../knexfile");
const cursor = knex(dbConfig.development);

async function addCursor(ctx, next) {
  ctx.db = cursor;
  await next();
}

module.exports = (app) => {
  app.use(addCursor);
};
