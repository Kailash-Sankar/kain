// keep configurations here

const server = {
  port: 8000,
};

const routing = {
  apiPrefix: "/api/v1",
};

const scheduler = {
  queuePollFrequency: 10000,
  debug: true,
};

module.exports = {
  server,
  routing,
  scheduler,
};
