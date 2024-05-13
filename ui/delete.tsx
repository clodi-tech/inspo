export default function Delete(id: any) {
  return (
    <form
      action={async () => {
        "use server";
        console.log("delete inspo", id);
      }}
    >
      <button type="submit" className="btn btn-warning btn-xs">
        Delete
      </button>
    </form>
  );
}
