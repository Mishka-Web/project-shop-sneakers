const Router = require('express');
const router = new Router();

const controller = require('../controllers/user.controller');

router.post('/reg', controller.reg);
router.post('/login', controller.login);
router.get('/auth', controller.isAuth);

module.exports = router;