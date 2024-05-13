import { Header } from "@/ui/master";
import Inspo from "@/ui/inspo";
import Copy from "@/ui/copy";
import Cards from "@/ui/cards";

export default async function Home() {
  return (
    <main>
      <Header />
      <Copy />
      <Inspo />
      <Cards />
    </main>
  );
}
