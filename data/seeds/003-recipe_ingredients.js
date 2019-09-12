exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        { ingredient_id: 1, recipe_id: 1, quantity: 2.5 },
        { ingredient_id: 2, recipe_id: 2, quantity: 2.9 },
        { ingredient_id: 3, recipe_id, quantity: 5.8 }
      ]);
    });
};
