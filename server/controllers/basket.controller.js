const { Basket, BasketProduct } = require("../models/models");

class BasketController {
	async getItems(req, res, next) {
		try {
			const { userId } = req.params;
			const items = await Basket.findAll({ where: { userId: userId } });
			return res.json(items);
		} catch (e) {
			console.error(e.message);
			next();
		}
	}

	async addItem(req, res, next) {
		try {
			const { idBasket, idProduct } = req.body;
			const item = await BasketProduct.create({
				basketId: idBasket,
				productId: idProduct
			});
			return res.json(item);
		} catch (e) {
			console.error(e.message);
			next();
		}
	}

	async removeItem(req, res, next) {
		try {
			const { id } = req.params;
			const item = await BasketProduct.destroy({ where: { id } });
			return res.json(item);
		} catch (e) {
			console.error(e.message);
			next();
		}
	}
}

module.exports = new BasketController();