const Router = require('express');
const router = new Router();

const controller = require('../controllers/basket.controller');

router.post('/', controller.getBasket);
router.post('/basket-product', controller.getBasketProduct);
router.post('/product', controller.getProducts);

module.exports = router;