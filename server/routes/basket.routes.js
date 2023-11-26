const Router = require('express');
const router = new Router();

const controller = require('../controllers/basket.controller');

router.post('/', controller.addItem);
router.post('/:id', controller.removeItem);
router.get('/:userId', controller.getItems);

module.exports = router;