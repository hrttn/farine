import { pgTable, serial, smallint, integer } from "drizzle-orm/pg-core"
import { availableIngredients } from "./available-ingredients"
import { stepsInRecipe } from "./steps-in-recipe"

export const ingredientsInRecipe = pgTable("IngredientsInRecipe", {
  id: serial("id").primaryKey(),
  weightInGrams: smallint("weight_in_grams"),
  temperatureInCelsius: smallint("temperature_in_celsius"),
  availableIngredientId: integer("available_ingredient_id").references(
    () => availableIngredients.id
  ),
  stepInRecipeId: integer("step_in_recipe_id").references(
    () => stepsInRecipe.id
  ),
})
