import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

export default function Home() {
  return (
    <main>
      <h1>{JSON.stringify(db)}</h1>
    </main>
  );
}
