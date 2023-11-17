const Router = require('express');
const router = new Router();

const userRoutes = require('./user.routes');
const productRoutes = require('./product.routes');

router.use('/user', userRoutes);
router.use('/product', productRoutes);

module.exports = router;