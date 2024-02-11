import {
  boolean,
  pgTable,
  serial,
  smallint,
  text,
  varchar,
} from "drizzle-orm/pg-core"

export const availableSteps = pgTable("AvailableSteps", {
  id: serial("id").primaryKey(),
  name: varchar("name").unique(),
  description: text("description"),
  required: boolean("required").default(true),
  stepNumber: smallint("step_number"),
})
