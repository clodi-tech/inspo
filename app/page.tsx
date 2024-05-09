import { auth } from "@/auth";
import { Avatar, Logo, SignIn, SignOut } from "@/ui/user";
import Bookmark from "@/ui/bookmark";

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
      <Bookmark />
      <SignOut />
    </main>
  );
}
