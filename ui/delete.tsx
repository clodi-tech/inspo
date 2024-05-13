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

    if (res.status === 200) {
      console.log("Deleted");
    } else {
      alert("Failed to delete");
    }
  }

  return (
    <form action={deleteInspo}>
      <button type="submit" className="btn btn-warning btn-xs">
        Delete
      </button>
    </form>
  );
}
