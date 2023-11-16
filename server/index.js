const cfg = require('./configuration/config');
const express = require("express");
const sequelize = require('./db');

const app = express();

(async function() {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		
		app.listen(cfg.PORT, () => console.log(`Server listening on ${cfg.PORT}`));
	} catch (error) {
		console.error(error);
	}
}());