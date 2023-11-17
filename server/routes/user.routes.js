const Router = require('express');
const router = new Router();

router.post('/reg');
router.post('/login');
router.get('/auth', (req, res) => {
	res.json({ message: "User is auth" });
});

module.exports = router;