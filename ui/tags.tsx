"use client";

import { useState } from "react";

export default function Tags() {
  const [selected, setSelected] = useState("food");
  const tags = ["food", "travel", "fashion", "lifestyle", "tech"];

  return (
    <div className="flex justify-center items-center gap-2">
      {tags.map((tag) => (
        <div
          className={
            tag == selected
              ? "badge badge-accent cursor-pointer"
              : "badge badge-outline badge-accent cursor-pointer"
          }
          onClick={() => setSelected(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}
