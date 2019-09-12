const db = require("../data/db-config");
module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesTitle,
  getRecipesByIngredient
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

function getRecipesTitle() {
  return db("recipes").select("name");
}

function getRecipesByIngredient(id) {
  return db("ingredients")
    .join(
      "recipe_ingredients",
      "ingredients.id",
      "recipe_ingredients.ingredient_id"
    )
    .join("recipes", "recipes.id", "recipe_ingredients.recipe_id")
    .select("recipes.name")
    .where({ "ingredients.id": id });
}
