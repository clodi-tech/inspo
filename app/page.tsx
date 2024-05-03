import { signIn, signOut, auth } from "@/auth.ts";
import Image from "next/image";

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

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    return (
      <main>
        <p>Not signed in</p>
        <SignIn />
      </main>
    );
  }

  return (
    <main>
      <p>Hi, {session.user.name}</p>
      <div className="avatar online">
        <div className="rounded-full w-24">
          <Image
            src={session.user.image!}
            alt="User Avatar"
            width={50}
            height={50}
          />
        </div>
      </div>
      <SignOut />
    </main>
  );
}
