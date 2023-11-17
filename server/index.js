const cfg = require('./configuration/config');
const models = require('./models/models');
const express = require("express");
const sequelize = require('./db');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const routes = require('./routes/index');
const {resolve} = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', routes);

(async function () {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(cfg.port, () => console.log(`Server listening on ${cfg.port}`));
    } catch (error) {
        console.error(error);
    }
}());