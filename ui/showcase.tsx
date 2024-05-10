import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { sql } from "drizzle-orm";
import { bookmarks } from "@/db/schema";
import { auth } from "@/auth";

const client = neon(process.env.AUTH_DRIZZLE_URL!);
const db = drizzle(client);

async function getBookmarks() {
  const session = await auth();
  if (!session) return [];

  const result = await db
    .select()
    .from(bookmarks)
    .where(sql`${bookmarks.userId} = ${session.user?.id}`);
  console.log(result);

  return result;
}

export default async function Showcase() {
  const bookmarks = await getBookmarks();
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 max-w-md">
      {bookmarks.map((bookmark) => (
        <div key={bookmark.id}>{bookmark.url}</div>
      ))}
    </div>
  );
}
