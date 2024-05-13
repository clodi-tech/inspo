import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { inspos } from "@/db/schema";
import { auth } from "@/auth";

const sql = neon(process.env.AUTH_DRIZZLE_URL!);
const db = drizzle(sql);

export async function POST(req: Request) {
  const body = await req.json();
  const url = body.inspo;

  const session = await auth();

  // get the metadata for the url
  const html = await fetch(url).then((res) => res.text());
  console.log("html", html);

  const result = await db
    .insert(inspos)
    .values({ userId: session?.user?.id!, url: url });
  console.log("insert result", result);

  return NextResponse.json({ message: "inspo created" });
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();

  await db.delete(inspos).where(eq(inspos.id, body.id));

  return NextResponse.json({ message: "inspo deleted" });
}
