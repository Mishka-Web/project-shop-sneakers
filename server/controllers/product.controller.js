const uuid = require("uuid");
const { resolve } = require("path");
const { Product } = require("../models/models");

class ProductController {
	async create(req, res, next) {
		try {
			const { title, price } = req.body;
			const { img } = req.files;
			const fileName = `${uuid.v4()}.jpg`;
			await img.mv(resolve(__dirname, "..", "static", fileName));
			const product = await Product.create({
				title,
				price,
				img: fileName,
			});
			return res.json(product);
		} catch (e) {
			console.error(e.message);
			next();
		}
	}

	async getAll(req, res, next) {
		try {
			let { limit, page } = req.query;
			page = page || 1;
			limit = limit || 9;
			let offset = page * limit - limit;
			const products = await Product.findAndCountAll({ limit, offset });
			return res.json(products);
		} catch (e) {
			console.error(e.message);
			next();
		}
	}

	async getOne(req, res, next) {
		try {
			const { id } = req.params;
			const product = await Product.findOne({ where: { id } });
			return res.json(product);
		} catch (e) {
			console.error(e.message);
			next();
		}
	}
}

module.exports = new ProductController();
