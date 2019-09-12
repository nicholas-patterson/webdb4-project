const db = require("../data/db-config");
module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("recipes")
    .join("recipe_ingredients", "recipes.id", "recipe_ingredients.recipe_id")
    .join("ingredients", "recipe_ingredients.ingredient_id", "ingredients.id")
    .select("recipes.name", "recipe_ingredients.quantity")
    .where({ recipe_id: id });
}

function getInstructions(id) {
  return db("recipes")
    .select("instructions")
    .where({ id });
}
