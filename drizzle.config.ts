import type { Config } from "drizzle-kit";
export default {
  schema: "./db/schema.ts",
  out: "./db/drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.AUTH_DRIZZLE_URL!,
    //connectionString: "",
  },
} satisfies Config;
