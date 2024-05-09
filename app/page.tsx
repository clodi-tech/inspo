import { auth } from "@/auth";
import { Avatar, Logo, SignIn } from "@/ui/user";
import Bookmark from "@/ui/bookmark";
import Copy from "@/ui/copy";

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
      <Copy />
      <Bookmark />
    </main>
  );
}
