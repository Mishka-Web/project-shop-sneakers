const Router = require('express');
const router = new Router();

const controller = require('../controllers/user.controller');
const authMiddleware = require('../utils/middleware/auth.middleware');

router.post('/reg', controller.reg);
router.post('/login', controller.login);
router.get('/auth', authMiddleware, controller.auth);

module.exports = router;