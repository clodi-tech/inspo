import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { sql, desc } from "drizzle-orm";
import { inspos } from "@/db/schema";
import { auth } from "@/auth";
import Card from "./card";
import Tags from "./tags";

const client = neon(process.env.AUTH_DRIZZLE_URL!);
const db = drizzle(client);

async function getInspos() {
  const session = await auth();
  if (!session) return [];

  const result = await db
    .select()
    .from(inspos)
    .where(sql`${inspos.userId} = ${session.user?.id}`)
    .orderBy(desc(inspos.time));

  return result;
}

export default async function Cards() {
  const inspos = await getInspos();

  return (
    <>
      <Tags />
      <div className="flex flex-wrap justify-center items-center gap-2">
        {inspos.map((inspo) => (
          <Card key={inspo.id} content={inspo} />
        ))}
      </div>
    </>
  );
}
