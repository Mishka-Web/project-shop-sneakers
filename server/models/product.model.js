const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Product = sequelize.define('product', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	img: {
		type: DataTypes.STRING,
		allowNull: false
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	price: {
		type: DataTypes.STRING,
		allowNull: false
	},
});

module.exports = Product;
