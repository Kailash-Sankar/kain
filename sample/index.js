const initRouter = require('../utils/initRouter');
const router = initRouter('sample');

router.get('/', (ctx) => {
    ctx.body = "Sample endpoint";
});

module.exports = router;