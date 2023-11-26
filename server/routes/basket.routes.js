const Router = require('express');
const router = new Router();

const controller = require('../controllers/basket.controller');

router.post('/add', controller.addItem);
router.post('/:id', controller.removeItem);
router.post('/', controller.getItems);

module.exports = router;