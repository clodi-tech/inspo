"use server";

import { inspos } from "@/db/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";

const client = neon(process.env.AUTH_DRIZZLE_URL!);
const db = drizzle(client);

export const saveCard = async (FormData: FormData) => {
  const id = FormData.get("id");
  const title = FormData.get("title");
  const description = FormData.get("description");
  const url = FormData.get("url");
  const tag = FormData.get("tag");
  const image = FormData.get("image");

  const result = await db
    .update(inspos)
    .set({
      title: String(title),
      description: String(description),
      url: String(url),
      tag: String(tag),
      image: String(image),
    })
    .where(eq(inspos.id, String(id)));

  console.log(result);
};
