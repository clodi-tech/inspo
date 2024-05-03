import { signIn } from "@/auth.ts";

export default function Home() {
  return (
    <main>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button type="submit" className="btn btn-info">
          Signin with GitHub
        </button>
      </form>
    </main>
  );
}
