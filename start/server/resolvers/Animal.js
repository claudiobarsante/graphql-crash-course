const Animal = {
	category: (parent, args, ctx) => {
		const categories = ctx.categories;
		return categories.find(category => category.id === parent.category);
	},
};

module.exports = Animal;
