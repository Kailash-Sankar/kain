const Router = require('koa-better-router');
const { routing } = require('../config');

function initRouter(prefix) {
    return new Router({ 
        prefix: `${routing.apiPrefix}/${prefix}`
    }).loadMethods();
}

module.exports = initRouter;