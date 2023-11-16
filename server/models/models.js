const User = require('./user.model');
const Basket = require('./basket.model');
const Product = require('./product.model');
const BasketProduct = require('./basketProduct.model');

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

BasketProduct.hasOne(Basket);
Basket.belongsTo(BasketProduct);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

User.hasOne(Basket);
Basket.belongsTo(User);

module.exports = {
	User,
	Basket,
	Product,
	BasketProduct,
};
