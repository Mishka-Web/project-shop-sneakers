import express from 'express';

const PORT = process.env.PORT || 3001;
const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	next();
});

app.get('/', (req, res) => {});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});