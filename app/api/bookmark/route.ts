import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("server add bookmark");
  return NextResponse.json({ message: "Bookmark created" });
}

export async function DELETE(req: NextRequest) {
  console.log("server delete bookmark");
}
