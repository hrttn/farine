import { db } from "./database"
import { migrate } from "drizzle-orm/vercel-postgres/migrator"

async function migrateDb() {
  try {
    await migrate(db, { migrationsFolder: "drizzle" })
    console.log("Migration complete")
    process.exit(0)
  } catch (error) {
    console.error("Migration error", error)
    process.exit(1)
  }
}

migrateDb()
