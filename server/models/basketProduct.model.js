const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const BasketProduct = sequelize.define('basket_product', {
	id: {
		type: DataTypes.NUMBER,
		primaryKey: true,
		autoIncrement: true
	}
})