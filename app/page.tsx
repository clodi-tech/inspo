import { signIn, signOut } from "@/auth.ts";

export default function Home() {
  return (
    <main>
      {/* sign in button */}
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

      {/* sign out button */}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit" className="btn">
          Sign Out
        </button>
      </form>
    </main>
  );
}
