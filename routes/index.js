import express from "express";
const router = express.Router();
const app = express();

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "../recipes.js";

router.get("/", (req, res) => {
  res.send("api page test");
});

router.get("/recipes", async (req, res) => {
  let result = await getRecipes();

  res.send({ success: true, payload: result });
});

router.get("/recipes/:id", async (req, res) => {
  let result = await getRecipeByID(req.params.id);
  console.log(result);
  res.send({ success: true, payload: result });
});

router.post("/recipes", async (req, res) => {
  let result = await createRecipe(req.body);
  res.send({ success: true, payload: result });
});

export default router;

router.patch("/recipes/:id", async (req, res) => {
  let result = await updateRecipeByID(req.params.id, req.body);
  res.send({ success: true, payload: result });
});

router.delete("/recipes/:id", async (req, res) => {
  let result = await deleteRecipeByID(req.params.id);
  res.send({ success: true, payload: result });
});
