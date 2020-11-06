// keep configurations here

const server = {
  port: 8000, // just the default for dev
};

const routing = {
  apiPrefix: "/api/v1",
};

const scheduler = {
  queuePollFrequency: 1000 * 60, // poll for events every minute
  debug: true,
};

const bot = {
  broadcastEndpoint: "/api/notify/all",
  alertEndpoint: "/api/notify",
};

// for mocking alerts
const mock = {
  debug: true,
  alert: {
    enabled: true,
    frequency: 1000 * 60 * 5, // mock every 5 minutes
    rate: { min: 0, max: 1 }, // how many events to mock, inclusive
  },
};

module.exports = {
  server,
  routing,
  scheduler,
  bot,
  mock,
};
