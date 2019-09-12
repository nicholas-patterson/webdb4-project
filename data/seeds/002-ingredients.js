exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "Tomato Sauce" }, // 1
        { name: "Seasoning" }, // 2
        { name: "Lemon Juice" } // 3
      ]);
    });
};
