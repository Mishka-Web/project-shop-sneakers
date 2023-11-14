import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql'

const PORT = process.env.PORT || 3001;
const app = express();

let schema = buildSchema(`
	type Query {
		hello: String
	}
`);

let root = {
	hello: () => {
		return "Hello world!"
	},
}

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