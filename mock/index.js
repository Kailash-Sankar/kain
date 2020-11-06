const { getCursor } = require("../middlewares/database");
const { generateLogger } = require("../middlewares/logger");
const mockAlertEvent = require("./alert");

function init(config) {
  const db = getCursor();
  const log = generateLogger(config);

  mockAlertEvent({ db, log, config: config.alert });
}

module.exports = init;
