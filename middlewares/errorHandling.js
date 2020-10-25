// log errors
const errorHandler = (app) =>
  app.on("error", (err) => {
    console.error("server:", err);
  });

module.exports = errorHandler;
