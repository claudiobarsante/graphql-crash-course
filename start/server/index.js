const { ApolloServer, gql } = require('apollo-server');
const { animals, mainCards } = require('./db');
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
	type MainCard {
		title: String
		image: String
	}

	type Animal {
		image: String!
		title: String!
		rating: Float!
		price: String!
		description: [String!]! #you must have an array  and inside the array it must be an array of strings, no nulls are allowed
		stock: Int!
		onSale: Boolean
	}
	# special type
	type Query {
		mainCards: [MainCard]
		animals: [Animal]
	}
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
	Query: {
		mainCards: () => mainCards,
		animals: () => animals,
	},
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
