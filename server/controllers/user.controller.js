const { User, Basket } = require("../models/models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cfg = require('../configuration/config');

function genJWT(opts = {}) {
	return jwt.sign({ ...opts }, cfg.SECRET_KEY, { expiresIn: '24h' });
}

class UserController {
	async reg(req, res, next) {
		const { email, password } = req.body;

		if (!email || !password) {
			console.log("Некорректный email или password");
			next();
		}

		const isEmail = await User.findOne({ where: { email } });

		if (isEmail) {
			console.log("Пользователь с таким email уже существует");
			next();
		}

		const hashPass = await bcrypt.hash(password, 5);
		const user = await User.create({
			email, password: hashPass
		});

		await Basket.create({ userId: user.id });

		const token = genJWT({
			id: user.id,
			email: email
		});

		return res.json({ token });
	}

	async login(req, res, next) {
		const { email, password } = req.body;
		const user = await User.findOne({ where: { email } });

		if (!user) {
			console.log("Пользователь не найден!");
			next();
		}

		const comparePass = bcrypt.compareSync(password, user.password);

		if (!comparePass) {
			console.log("Указан неверный пароль!");
			next();
		}

		const token = genJWT({
			id: user.id,
			email: email
		});

		return res.json({ token });
	}

	async auth(req, res) {
		const token = genJWT({
			id: req.user.id,
			email: req.user.email
		});

		return res.json({ token });
	}
}

module.exports = new UserController();