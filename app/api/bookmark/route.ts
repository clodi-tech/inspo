import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { bookmarks } from "@/db/schema";
import { auth } from "@/auth";

const sql = neon(process.env.AUTH_DRIZZLE_URL!);
const db = drizzle(sql);

export async function POST(req: Request) {
  const body = await req.json();
  console.log("server create bookmark", body);

  const session = await auth();
  console.log("session", session);

  const result = await db
    .insert(bookmarks)
    .values({ userId: session?.user?.id!, url: body.bookmark });
  console.log("result", result);

  return NextResponse.json({ message: "Bookmark created" });
}

export async function DELETE(req: NextRequest) {
  console.log("server delete bookmark");
}
