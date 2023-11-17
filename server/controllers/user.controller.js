const {User, Basket} = require("../models/models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cfg = require('../configuration/config');

function genJWT(opts = {}) {
    return jwt.sign({...opts}, cfg.secretKey, {expiresIn: '24h'});
}

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
        const token = genJWT({
            id: user.id,
            email: email
        });

        return res.json({token});
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user) return next("Пользователь не найден!");
        const comparePass = bcrypt.compareSync(password, user.password);
        if (!comparePass) return next("Указан неверный пароль!");
        const token = genJWT({
            id: user.id,
            email: user.email
        });
        return res.json({token});
    }

    async isAuth(req, res) {
        const token = genJWT({
            id: req.user.id,
            email: req.user.email
        });
        return res.json({token});
    }
}

module.exports = new UserController();