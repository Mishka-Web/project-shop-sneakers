const cfg = require('./configuration/config');
const models = require('./models/models');
const express = require("express");
const sequelize = require('./db.js');
const cors = require('cors');

const app = express();

// settings
app.use(cors);
app.use(express.json());

(async function() {
	try {
		await sequelize.authenticate();
		await sequelize.sync();

		app.listen(cfg.PORT, () => console.log(`Server listening on ${cfg.PORT}`));
	} catch (error) {
		console.error(error);
	}
}());