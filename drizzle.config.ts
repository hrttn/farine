import "dotenv/config"
import type { Config } from "drizzle-kit"

const connectionString = process.env.POSTGRES_URL
if (!connectionString) {
  throw new Error("Missing Postgres url, please fill POSTGRES_URL variable")
}
export default {
  schema: "./src/database/schema/*.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString,
  },
  verbose: true,
  strict: true,
} satisfies Config
