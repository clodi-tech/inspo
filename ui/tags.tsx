"use client";

import { useState } from "react";

type Tag = {
  id: string;
  tag: string;
};

export default function Tags({ tags }: { tags: Tag[] }) {
  const [selected, setSelected] = useState(tags[0].tag);

  return (
    <div className="flex justify-center items-center gap-2">
      {tags.map((tag) => (
        <div
          className={
            tag.tag == selected
              ? "badge badge-accent cursor-pointer"
              : "badge badge-outline badge-accent cursor-pointer"
          }
          onClick={() => setSelected(tag.tag)}
        >
          {tag.tag}
        </div>
      ))}
    </div>
  );
}
