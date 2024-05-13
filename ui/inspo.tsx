"use client";

import { useState } from "react";

export default function Inspo() {
  const [inspo, setInspo] = useState("");

  async function addInspo() {
    const body = {
      inspo: inspo,
    };

    const res = await fetch("/api/inspo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      setInspo("");
    } else setInspo("Something went wrong");
  }

  return (
    <form action={addInspo}>
      <label className="input input-bordered input-primary flex items-center gap-2">
        <input
          autoFocus
          type="text"
          name="inspo"
          className="grow w-80"
          placeholder="Enter your favourite link here"
          value={inspo}
          onChange={(e) => setInspo(e.target.value)}
        />
        <kbd className="kbd kbd-sm">↵</kbd>
      </label>
    </form>
  );
}