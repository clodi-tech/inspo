import Image from "next/image";
import Delete from "./delete";

export default function Card({ content }: { content: any }) {
  return (
    <div className="card max-w-sm bg-base-100 shadow-xl image-full">
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
        <p className="text-xs">{content.description}</p>
        <div className="card-actions">
          <div className="badge badge-accent">{content.tag}</div>
          <a href={content.url} target="_blank" rel="noopener">
            <div className="btn btn-primary btn-xs">Open</div>
          </a>
          <Delete id={content.id} />
        </div>
      </div>
    </div>
  );
}
