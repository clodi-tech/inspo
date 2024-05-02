import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { signIn } from "@/auth.ts";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

export default function Home() {
  return (
    <main>
      <h1>{JSON.stringify(db)}</h1>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button type="submit" className="btn btn-info">
          Signin with GitHub
        </button>
      </form>
    </main>
  );
}
