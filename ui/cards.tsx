import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { sql, asc, desc } from "drizzle-orm";
import { inspos } from "@/db/schema";
import { auth } from "@/auth";
import Content from "./content";

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

  const result = await db
    .selectDistinct({ tag: inspos.tag })
    .from(inspos)
    .where(sql`${inspos.userId} = ${session.user?.id}`)
    .orderBy(asc(inspos.tag));

  // make this array of objects into an array of strings
  const array = result.map((tag: any) => tag.tag);
  return array;
}

export default async function Cards() {
  const inspos = await getInspos();
  const tags = await getTags();

  return <Content tags={tags} inspos={inspos} />;
}
