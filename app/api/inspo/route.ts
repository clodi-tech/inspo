import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { inspos } from "@/db/schema";
import { auth } from "@/auth";
import ogs from "open-graph-scraper";

const sql = neon(process.env.AUTH_DRIZZLE_URL!);
const db = drizzle(sql);

export async function POST(req: Request) {
  const body = await req.json();

  const session = await auth();

  const options = { url: body.inspo };
  const { result } = await ogs(options);
  console.log("og", result);

  let imageUrl = "/default.png";
  if (result.ogImage && result.ogImage.length > 0) {
    imageUrl = result.ogImage[0].url;
  }

  const res = await db.insert(inspos).values({
    userId: session?.user?.id!,
    url: result.requestUrl || body.inspo,
    title: result.ogTitle,
    description: result.ogDescription,
    image: imageUrl,
  });
  console.log("insert", res);

  return NextResponse.json({ message: "inspo created" });
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();

  await db.delete(inspos).where(eq(inspos.id, body.id));

  return NextResponse.json({ message: "inspo deleted" });
}
