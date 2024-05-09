"use client";

import { useState } from "react";

export default function Bookmark() {
  const [bookmark, setBookmark] = useState("");

  function addBookmark() {
    console.log(bookmark);
  }

  return (
    <form action={addBookmark}>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          name="bookmark"
          className="grow w-80"
          placeholder="Enter the link here"
          value={bookmark}
          onChange={(e) => setBookmark(e.target.value)}
        />
        <kbd className="kbd kbd-sm">↵</kbd>
      </label>
    </form>
  );
}
