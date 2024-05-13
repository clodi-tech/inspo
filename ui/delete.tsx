"use client";

export default function Delete({ id }: { id: any }) {
  async function deleteInspo() {
    const body = {
      id: id,
    };

    const res = await fetch("/api/inspo", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      console.error("Failed to delete inspo", res);
    } else {
      window.location.reload();
    }
  }

  return (
    <form action={deleteInspo}>
      <button type="submit" className="btn btn-error btn-xs">
        Delete
      </button>
    </form>
  );
}
