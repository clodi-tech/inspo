import { signIn, signOut } from "@/auth.ts";

function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button type="submit" className="btn btn-primary">
        Signin with GitHub
      </button>
    </form>
  );
}

function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className="btn btn-secondary">
        Sign Out
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <main>
      <SignIn />
      <SignOut />
    </main>
  );
}
