const { gql } = require('apollo-server');
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
		category: Category #Relantionship one Animal has one Category
	}

	type Category {
		id: ID!
		image: String!
		category: String!
		slug: String!
		animals: [Animal]! #Relantionship one Category has many Animals
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

module.exports = typeDefs;
