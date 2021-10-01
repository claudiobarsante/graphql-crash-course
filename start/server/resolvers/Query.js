const Query = {
	mainCards: () => mainCards,
	animals: (parent, args, { animals }) => animals, // you can destruct ctx to get {animals} from db.js
	animal: (parent, args, ctx) => {
		const animals = ctx.animals;
		return animals.find(animal => animal.slug === args.slug);
	},
	categories: (parent, args, { categories }) => categories,
	category: (parent, args, ctx) => {
		const categories = ctx.categories;
		return categories.find(category => category.slug === args.slug);
	},
};

module.exports = Query;
// Resolvers define the technique for fetching the types defined in the
// schema.
