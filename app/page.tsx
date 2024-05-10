import { Header } from "@/ui/master";
import Bookmark from "@/ui/bookmark";
import Copy from "@/ui/copy";
import Showcase from "@/ui/showcase";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main>
      <Header />
      <Copy />
      <Bookmark />
      <Suspense fallback={<div>Loading...</div>}>
        <Showcase />
      </Suspense>
    </main>
  );
}
