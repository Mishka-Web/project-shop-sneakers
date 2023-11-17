const Router = require('express');
const router = new Router();

// Controller 
const userController = require('../controllers/user.controller');

router.post('/reg');
router.post('/login');
router.get('/auth', userController.isAuth);

module.exports = router;