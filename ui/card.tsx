import Image from "next/image";
import Delete from "./delete";

export default function Card({ content }: { content: any }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <Image src="/logo.svg" alt="image" width={100} height={100} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">title</h2>
        <p>description</p>
        <div className="card-actions justify-end">
          <a href={content.url} target="_blank">
            <div className="btn btn-primary">open link</div>
          </a>
          <Delete id={content.id} />
        </div>
      </div>
    </div>
  );
}
