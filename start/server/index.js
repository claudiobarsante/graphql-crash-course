const { ApolloServer } = require('apollo-server');
const { animals, mainCards, categories } = require('./db');
const typeDefs = require('./schema');

const Query = require('./resolvers/Query');
const Category = require('./resolvers/Category');
const Animal = require('./resolvers/Animal');

const Mutation = require('./resolvers/Mutation');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
	typeDefs,
	resolvers: { Query, Mutation, Category, Animal },
	context: { animals, mainCards, categories },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
