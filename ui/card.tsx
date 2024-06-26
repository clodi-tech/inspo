import Image from "next/image";
import Delete from "./delete";
import { saveCard } from "@/utils/actions";

export default function Card({ content }: { content: any }) {
  const modalId = `edit_card_${content.id}`;
  return (
    <>
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
            <button
              className="btn btn-neutral btn-xs"
              onClick={() => {
                const modal = document.getElementById(
                  modalId
                ) as HTMLDialogElement;
                if (modal) {
                  modal.showModal();
                }
              }}
            >
              Edit
            </button>
            <Delete id={content.id} />
          </div>
        </div>
      </div>
      <dialog id={modalId} className="modal">
        <div className="modal-box w-full max-w-sm">
          <form
            action={saveCard}
            onSubmit={() => {
              const modal = document.getElementById(
                modalId
              ) as HTMLDialogElement;
              if (modal) {
                modal.close();
              }
            }}
          >
            <input type="hidden" name="id" value={content.id} />
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              <input
                type="text"
                name="title"
                defaultValue={content.title}
                className="input input-bordered w-full max-w-sm"
              />
            </label>
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                name="description"
                defaultValue={content.description}
                className="textarea textarea-bordered h-24"
              />
            </label>
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text">URL</span>
              </div>
              <input
                type="text"
                name="url"
                defaultValue={content.url}
                className="input input-bordered w-full max-w-sm"
              />
            </label>
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text">Tag</span>
              </div>
              <input
                type="text"
                name="tag"
                defaultValue={content.tag}
                className="input input-bordered w-full max-w-sm"
              />
            </label>
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text">Image</span>
              </div>
              <input
                type="text"
                name="image"
                defaultValue={content.image}
                className="input input-bordered w-full max-w-sm"
              />
            </label>
            <button type="submit" className="btn btn-primary mt-4 mr-2">
              Save
            </button>
            <button type="reset" className="btn btn-secondary mt-4 mr-2">
              Reset
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
