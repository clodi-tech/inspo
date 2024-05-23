import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { sql, desc } from "drizzle-orm";
import { inspos, tags } from "@/db/schema";
import { auth } from "@/auth";
import Card from "./card";
import Tags from "./tags";

const client = neon(process.env.AUTH_DRIZZLE_URL!);
const db = drizzle(client);

async function getInspos() {
  const session = await auth();
  if (!session || !session.user?.id) return [];

  const result = await db
    .select()
    .from(inspos)
    .where(sql`${inspos.userId} = ${session.user?.id}`)
    .orderBy(desc(inspos.time));

  return result;
}

async function getTags() {
  const session = await auth();
  if (!session || !session.user?.id) return [];

  //await db.insert(tags).values({ tag: "ui", userId: session.user?.id });
  const result = await db
    .select()
    .from(tags)
    .where(sql`${tags.userId} = ${session.user?.id}`);

  return result;
}

export default async function Cards() {
  const inspos = await getInspos();
  const tags = await getTags();

  return (
    <>
      <Tags tags={tags} inspos={inspos} />
    </>
  );
}
