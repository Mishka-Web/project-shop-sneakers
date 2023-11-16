const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Basket = sequelize.define('basket', {
	id: {
		type: DataTypes.NUMBER,
		primaryKey: true,
		autoIncrement: true
	}
})