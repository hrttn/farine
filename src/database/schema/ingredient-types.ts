import { pgTable, serial, varchar } from "drizzle-orm/pg-core"

export const ingredientTypes = pgTable("IngredientTypes", {
  id: serial("id").primaryKey(),
  name: varchar("name").unique().notNull(),
})
