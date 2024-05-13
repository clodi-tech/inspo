import { Header } from "@/ui/master";
import Inspo from "@/ui/inspo";
import Cards from "@/ui/cards";

export default async function Home() {
  return (
    <main>
      <Header />
      <Inspo />
      <Cards />
    </main>
  );
}
