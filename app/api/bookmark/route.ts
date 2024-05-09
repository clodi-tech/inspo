import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("server create bookmark", body);

  return NextResponse.json({ message: "Bookmark created" });
}

export async function DELETE(req: NextRequest) {
  console.log("server delete bookmark");
}
