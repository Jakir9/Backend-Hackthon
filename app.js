import express from "express";
import router from "./routes/index.js";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use("/api", router); // /api is our default path

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
