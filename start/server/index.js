const { ApolloServer, gql } = require('apollo-server');
const { animals, mainCards, categories } = require('./db');
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
	type MainCard {
		title: String
		image: String
	}

	type Animal {
		id: ID!
		description: [String!]! #you must have an array  and inside the array it must be an array of strings, no nulls are allowed
		image: String!
		onSale: Boolean
		price: String!
		rating: Float!
		stock: Int!
		title: String!
		slug: String!
	}

	type Category {
		id: ID!
		image: String!
		category: String!
		slug: String!
	}

	# special type
	type Query {
		mainCards: [MainCard]
		animals: [Animal!]!
		animal(slug: String!): Animal
		categories: [Category!]!
		category(slug: String!): Category
	}
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
	Query: {
		mainCards: () => mainCards,
		animals: () => animals,
		animal: (parent, args, ctx) => {
			return animals.find(animal => animal.slug === args.slug);
		},
		categories: () => categories,
		category: (parent, args, ctx) => {
			return categories.find(category => category.slug === args.slug);
		},
	},
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
