"use client";

import { useState } from "react";
import Card from "./card";

export default function Content({
  tags,
  inspos,
}: {
  tags: string[];
  inspos: any;
}) {
  const [selected, setSelected] = useState(tags[0]);

  // filter the inspos based on the selected tag
  inspos = inspos.filter((inspo: any) => inspo.tag === selected);

  return (
    <>
      <div className="flex justify-center items-center gap-2">
        {tags.map((tag, i) => (
          <div
            key={i}
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
      <div className="flex flex-wrap justify-center items-center gap-2">
        {inspos.map((inspo: any) => (
          <Card key={inspo.id} content={inspo} />
        ))}
      </div>
    </>
  );
}
