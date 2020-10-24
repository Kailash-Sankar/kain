const baseRouter = require('./base/index');
const sampleRouter = require('./sample/index');

function addRoutes(app) {
    app.use(baseRouter.middleware());
    app.use(sampleRouter.middleware());
}

module.exports = addRoutes;