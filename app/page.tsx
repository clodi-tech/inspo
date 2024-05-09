import { auth } from "@/auth";
import { Avatar, Logo, SignIn, SignOut } from "@/ui/user";

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    return (
      <main>
        <SignIn />
      </main>
    );
  }

  return (
    <main>
      <Logo />
      <Avatar user={session.user} />
      <SignOut />
    </main>
  );
}
