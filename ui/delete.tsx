export function Delete(id: string) {
  return (
    <form
      action={async () => {
        "use server";
        console.log("delete inspo", id);
      }}
    >
      <button type="submit" className="btn btn-secondary btn-xs">
        Delete
      </button>
    </form>
  );
}
