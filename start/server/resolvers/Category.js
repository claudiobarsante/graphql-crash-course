const Category = {
	animals: (parent, args, ctx) => {
		const animals = ctx.animals;
		const result = animals.filter(animal => animal.category === parent.id);
		return result;
	},
};

module.exports = Category;
