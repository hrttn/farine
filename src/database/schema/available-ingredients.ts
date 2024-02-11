import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core"
import { ingredientTypes } from "./ingredient-types"

export const availableIngredients = pgTable("AvailableIngredients", {
  id: serial("id").primaryKey(),
  name: varchar("name").unique().notNull(),
  ingredientTypeId: integer("ingredient_type_id").references(
    () => ingredientTypes.id
  ),
})
