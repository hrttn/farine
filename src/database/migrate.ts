import { db } from "./database"
import { migrate } from "drizzle-orm/vercel-postgres/migrator"
async function migrateDb() {
  try {
    await migrate(db, { migrationsFolder: "drizzle" })
    console.log("Migration complete")
  } catch (error) {
    console.log(error)
  }
  process.exit(0)
}

migrateDb()
