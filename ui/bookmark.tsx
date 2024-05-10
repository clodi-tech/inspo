"use client";

import { useState } from "react";

export default function Bookmark() {
  const [bookmark, setBookmark] = useState("");

  async function addBookmark() {
    const body = {
      bookmark: bookmark,
    };

    const res = await fetch("/api/bookmark", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      setBookmark("");
      //revalidatePath("/");
    } else setBookmark("Something went wrong");
  }

  return (
    <form action={addBookmark}>
      <label className="input input-bordered input-primary flex items-center gap-2">
        <input
          autoFocus
          type="text"
          name="bookmark"
          className="grow w-80"
          placeholder="Enter your favourite link here"
          value={bookmark}
          onChange={(e) => setBookmark(e.target.value)}
        />
        <kbd className="kbd kbd-sm">↵</kbd>
      </label>
    </form>
  );
}
