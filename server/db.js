const cfg = require('./configuration/config');
const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
	cfg.db_name,
	cfg.db_user,
	cfg.db_pass,
	{
		dialect: 'postgres',
		host: cfg.db_host,
		port: cfg.db_port
	}
)