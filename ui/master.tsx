import { signIn, signOut } from "@/auth";
import Image from "next/image";

export function SignIn() {
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

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className="btn btn-secondary btn-xs">
        Sign Out
      </button>
    </form>
  );
}

export function Avatar({ user }: { user: any }) {
  return (
    <div className="avatar online">
      <div className="rounded-full">
        <Image src={user.image} alt="User Avatar" width={50} height={50} />
      </div>
    </div>
  );
}

export function Logo() {
  return <Image src="/logo.svg" alt="Logo" width={30} height={30} />;
}

import { auth } from "@/auth";

export async function Header() {
  const session = await auth();

  return (
    <header className="fixed top-0 flex w-full justify-between items-center p-4">
      <Logo />
      {session ? (
        <div className="flex items-center gap-2">
          <SignOut />
          <Avatar user={session.user} />
        </div>
      ) : (
        <SignIn />
      )}
    </header>
  );
}
