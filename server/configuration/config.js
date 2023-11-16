require('dotenv').config();

const config = {
	PORT: process.env.PORT || 5432,
	db_name: process.env.DB_NAME,
	db_user: process.env.DB_USER,
	db_pass: process.env.DB_PASSWORD,
	db_host: process.env.DB_HOST,
	db_port: process.env.DB_PORT,
}

module.exports = config