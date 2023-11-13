import express from 'express';
const PORT = process.env.PORT || 3001;
const app = express();

let { graphqlHTTP } = require("express-graphql")
let { buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
let schema = buildSchema(`
	type Query {
		hello: String
	}
`);

app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
	})
);

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});