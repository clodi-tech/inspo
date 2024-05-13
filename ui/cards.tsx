import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { sql } from "drizzle-orm";
import { bookmarks } from "@/db/schema";
import { auth } from "@/auth";
import Image from "next/image";
import { Delete } from "./delete";

const client = neon(process.env.AUTH_DRIZZLE_URL!);
const db = drizzle(client);

async function getInspos() {
  const session = await auth();
  if (!session) return [];

  const result = await db
    .select()
    .from(bookmarks)
    .where(sql`${bookmarks.userId} = ${session.user?.id}`);
  console.log(result);

  return result;
}

export default async function Cards() {
  const inspos = await getInspos();
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 max-w-md">
      {inspos.map((inspo) => (
        <div
          key={inspo.id}
          className="card w-96 bg-base-100 shadow-xl image-full"
        >
          <figure>
            <Image src="/logo.svg" alt="image" width={100} height={100} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">title</h2>
            <p>description</p>
            <div className="card-actions justify-end">
              <a href={inspo.url} target="_blank">
                <div className="btn btn-primary">open link</div>
              </a>
              <Delete id={inspo.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
