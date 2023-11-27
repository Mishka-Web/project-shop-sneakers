const { BasketProduct, Basket, Product } = require("../models/models");

class BasketController {
	async getBasket(req, res, next) {
		try {
			const { userId } = req.body;
			const items = await Basket.findOne({ where: { userId: userId } });
			return res.json(items);
		} catch (e) {
			console.error(e.message);
			next();
		}
	}

	async getBasketProduct(req, res, next) {
		try {
			const { basketId } = req.body;
			const items = await BasketProduct.findOne({ where: { basketId: basketId } });
			return res.json(items);
		} catch (e) {
			console.error(e.message);
			next();
		}
	}

	async getProducts(req, res, next) {
		try {
			const { productId } = req.body;
			const items = await Product.findAll({ where: { id: productId } });
			return res.json(items);
		} catch (e) {
			console.error(e.message);
			next();
		}
	}
}

module.exports = new BasketController();