const jwt = require('jsonwebtoken');
const cfg = require('../../configuration/config');

module.exports = function (req, res, next) {
    if (res.method === "OPTIONS") next();

    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) return res.status(401).json({message: "Не авторизован!"});
        req.user = jwt.verify(token, cfg.secretKey);
        next();

    } catch (error) {
        res.status(401).json({
            message: "Не авторизован!"
        });
    }
}