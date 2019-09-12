exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.string("cook_time", 255).notNullable();
      tbl.text("instructions");
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("name", 255).unique();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl
        .integer("ingredient_id")
        .unsigned()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl.float("quantity").notNullable();

      tbl.primary(["ingredient_id", "recipe_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
