var findAllRecipes = function (recipes, ingredients, supplies) {
  let canMake = new Set(supplies);
  let graph = new Map();
  let inDegree = new Map();

  // Build the graph
  for (let i = 0; i < recipes.length; i++) {
    graph.set(recipes[i], ingredients[i]); // Store dependencies
    inDegree.set(recipes[i], ingredients[i].length); // Number of required ingredients
  }

  let queue = [];

  // Start with supplies
  for (let recipe of recipes) {
    if (ingredients[recipes.indexOf(recipe)].every((ing) => canMake.has(ing))) {
      queue.push(recipe);
    }
  }

  let result = new Set();

  while (queue.length) {
    let recipe = queue.shift();
    result.add(recipe);
    canMake.add(recipe); // Now we have this recipe as a supply

    // Check dependent recipes
    for (let r of recipes) {
      if (!canMake.has(r)) {
        let required = graph.get(r).filter((ing) => !canMake.has(ing));
        inDegree.set(r, required.length);
        if (required.length === 0) {
          queue.push(r);
        }
      }
    }
  }

  return [...result];
};
