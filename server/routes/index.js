const Router = require('express');
const router = new Router();

router.use('/user');
router.use('/product');

module.exports = router;