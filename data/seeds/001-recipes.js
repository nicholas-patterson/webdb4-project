exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          name: "Spaghetti",
          cook_time: "1:00:00",
          instructions: "Do not forget the noodles"
        }, // 1
        {
          name: "Chicken",
          cook_time: "30:00",
          instructions: "Do not burn it...I love chicken"
        }, // 2
        {
          name: "Salmon",
          cook_time: "45:00",
          instructions: "I like lemon juice on it"
        }, // 3
        {
          name: "Chicken Paramsean",
          cook_time: "20:00",
          instructions: "I like it doused in sauce"
        }
      ]);
    });
};
