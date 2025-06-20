import Header from "@/src/Header";
import Menu from "@/src/Menu";

export default function Home() {
  return (
    <main className="min-h-screen p-8 m-auto flex h-full max-w-4xl flex-col px-4">
      <Header className="max-w-4xl mx-auto" />
      <Menu />
    </main>
  );
}
