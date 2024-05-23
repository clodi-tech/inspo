"use client";

import { useState } from "react";
import Card from "./card";

type Tag = {
  id: string;
  tag: string;
};

export default function Tags({ tags, inspos }: { tags: Tag[]; inspos: any }) {
  const [selected, setSelected] = useState("default");

  // get the id of the selected tag
  const selectedTag = tags.find((tag) => tag.tag === selected);

  // filter the inspos based on the selected tag
  inspos = inspos.filter((inspo: any) => inspo.tagId === selectedTag?.id);

  return (
    <>
      <div className="flex justify-center items-center gap-2">
        {tags.map((tag) => (
          <div
            key={tag.id}
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
      <div className="flex flex-wrap justify-center items-center gap-2">
        {inspos.map((inspo: any) => (
          <Card key={inspo.id} content={inspo} />
        ))}
      </div>
    </>
  );
}
