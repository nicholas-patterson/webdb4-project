const express = require("express");
const router = express.Router();
const Recipe = require("./helpers");

router.get("/", (req, res) => {
  Recipe.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch({ error: "Server could not get recipes" });
});

router.get("/titles", (req, res) => {
  Recipe.getRecipesTitle()
    .then(title => {
      res.status(200).json(title);
    })
    .catch(err => {
      res.status(500).json({ error: "Server could not get recipe titles" });
    });
});

router.get("/:id/ingredients", (req, res) => {
  const id = req.params.id;
  Recipe.getShoppingList(id)
    .then(list => {
      if (list.length === 0) {
        res.status(400).json({
          error: `Sever could not get list of ingredients with the ID: ${id}`
        });
      } else {
        res.status(200).json(list);
      }
    })
    .catch(err => {
      res.status(500).json({ error: "Server could not get shopping list" });
    });
});

router.get("/:id/instructions", (req, res) => {
  const id = req.params.id;
  Recipe.getInstructions(id)
    .then(list => {
      if (list.length === 0) {
        res.status(400).json({
          error: `Server could not get instructions for the ID: ${id}`
        });
      } else {
        res.status(200).json(list);
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Server could not get list of instructions" });
    });
});

module.exports = router;
