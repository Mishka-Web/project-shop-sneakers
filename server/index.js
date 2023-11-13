import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql'

const PORT = process.env.PORT || 3001;
const app = express();

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
		graphiql: true,
	})
);

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});