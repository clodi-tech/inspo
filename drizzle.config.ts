import type { Config } from "drizzle-kit";
export default {
  schema: "./db/schema.ts",
  out: "./db/drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: "",
  },
} satisfies Config;
