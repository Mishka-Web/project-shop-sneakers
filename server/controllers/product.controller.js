const uuid = require('uuid');
const {resolve} = require('path');
const {Product} = require('../models/models');

class ProductController {

    async create(req, res, next) {
        try {
            const {title, price} = req.body;
            const {img} = req.files;
            const fileName = uuid.v4() + ".jpg";
            await img.mv(resolve(__dirname, '..', 'static', fileName));
            const product = await Product.create({title, price, img: fileName});
            return res.json(product);
        } catch (error) {
            next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            let { limit, page } = req.query;
            page = page || 1;
            limit = limit || 9;
            let offset = page * limit - limit;

            const products = await Product.findAndCountAll({limit, offset});
            return res.json(products);
        } catch (error) {
            next(error);
        }

    }

    async getOne(req, res) {
        const {id} = req.params;
        const product = await Product.findOne({where: {id}});
        return res.json(product);
    }
}

module.exports = new ProductController();