import { Header } from "@/ui/master";
import Bookmark from "@/ui/bookmark";
import Copy from "@/ui/copy";
import Showcase from "@/ui/showcase";

export default async function Home() {
  return (
    <main>
      <Header />
      <Copy />
      <Bookmark />
      <Showcase />
    </main>
  );
}
