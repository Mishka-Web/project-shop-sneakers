const {User, Basket} = require("../models/models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cfg = require('../configuration/config');

class UserController {
    async reg(req, res, next) {
        const {email, password} = req.body;

        if (!email || !password) return next("Некорректный email или password");

        const isEmail = await User.findOne({where: {email}});

        if (isEmail) return next("Пользователь с таким email уже существует");

        const hashPass = await bcrypt.hash(password, 5);
        const user = await User.create({
            email, password: hashPass
        });
        const basket = await Basket.create({userId: user.id});
        const token = jwt.sign({id: user.id, email}, cfg.secretKey, {expiresIn: '24h'});

        return res.json({token});
    }

    async login() {

    }

    async isAuth(req, res) {
        res.json("User is auth.");
    }
}

module.exports = new UserController();