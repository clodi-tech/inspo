import Image from "next/image";
import Delete from "./delete";

export default function Card({ content }: { content: any }) {
  return (
    console.log(content),
    (
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <Image
            src={content.image}
            alt="image"
            style={{ width: "100%", height: "auto" }}
            width={1200}
            height={630}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{content.title}</h2>
          <p>{content.description}</p>
          <div className="card-actions justify-end">
            <a href={content.url} target="_blank">
              <div className="btn btn-primary">Open</div>
            </a>
            <Delete id={content.id} />
          </div>
        </div>
      </div>
    )
  );
}
