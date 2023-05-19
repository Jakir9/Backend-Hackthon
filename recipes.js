import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

// GET ALL RECIPES
export async function getRecipes() {
  //read file
  //parse file

  const file = await fs.readFile(fileName, "utf8");
  const recipes = JSON.parse(file); //turns json into js object
  return recipes;
}

// GET A RECIPE BY ID
export async function getRecipeByID(id) {
  const file = await fs.readFile(fileName, "utf8");
  const recipes = JSON.parse(file); //turns json into js object

  for (const recipe of recipes) {
    if (recipe.id === id) {
      return recipe;
    }
  }
  console.log("Recipe not found.");
  return null;
}

// CREATE A RECIPE
export async function createRecipe(newRecipe) {
  const file = await fs.readFile(fileName, "utf8"); //read file
  const recipes = JSON.parse(file); //turns json into js object
  newRecipe.id = uuidv4(); //creates a new id
  recipes.push(newRecipe); //pushes new recipe into recipes array
  await fs.writeFile(fileName, JSON.stringify(recipes, null, 2));
  return newRecipe;
}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {
  const file = await fs.readFile(fileName, "utf8"); //read file
  const recipes = JSON.parse(file); //turns json into js object
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id === id) {
      recipes[i] = updatedRecipe; // updates recipe

      break;
    }
  }
  await fs.writeFile(fileName, JSON.stringify(recipes, null, 2));
  return updatedRecipe;
}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {
  const file = await fs.readFile(fileName, "utf8"); //read file
  const recipes = JSON.parse(file); //turns json into js object
  for (const recipe of recipes) {
    //loops through recipes
    if (recipe.id === id) {
      const index = recipes.indexOf(recipe); //finds index of recipe
      recipes.splice(index, 1); //removes recipe from array
    }
  }
  await fs.writeFile(fileName, JSON.stringify(recipes, null, 2));
  return recipes;
}
