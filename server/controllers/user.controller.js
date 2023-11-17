const {User, Basket} = require("../models/models");
const bcrypt = require('bcrypt');

class UserController {
    async reg(req, res, next) {
        const {email, password} = req.body;

        if (!email || !password) return next("Некорректный email или password");

        const isEmail = await User.findOne({where: {email}});

        if (isEmail) return next("Пользователь с таким email уже существует");

        const hashPass = await bcrypt.hash(password, 5);
        const user = await User.create({
            email,
            role,
            password: hashPass
        });
        const 
    }

    async login() {

    }

    async isAuth(req, res) {
        res.json("User is auth.");
    }
}

module.exports = new UserController();