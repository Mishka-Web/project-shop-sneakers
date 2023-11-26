const Router = require('express');
const router = new Router();

const userRoutes = require('./user.routes');
const productRoutes = require('./product.routes');
const basketRoutes = require('./basket.routes');

router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/basket', basketRoutes);

module.exports = router;