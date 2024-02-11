import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core"

export const recipes = pgTable("Recipes", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  created_at: timestamp("timestamp"),
})
