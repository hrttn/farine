import {
  interval,
  pgTable,
  serial,
  text,
  smallint,
  integer,
} from "drizzle-orm/pg-core"
import { recipes } from "./recipes"
import { availableSteps } from "./available-steps"

export const stepsInRecipe = pgTable("Steps", {
  id: serial("id").primaryKey(),
  instructions: text("instructions"),
  durationInMinutes: interval("duration_in_minutes", { fields: "minute" }),
  desiredDoughTemperatureInCelsius: smallint(
    "desired_dough_temperature_in_celsius"
  ),
  recipeId: integer("recipe_id").references(() => recipes.id),
  availableStepId: integer("available_step_id").references(
    () => availableSteps.id
  ),
})
