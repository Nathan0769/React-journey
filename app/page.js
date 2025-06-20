"use client";
import { CardList } from "@/src/Card";
import Header from "@/src/Header";
import Menu from "@/src/Menu";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="min-h-screen p-8 m-auto flex h-full max-w-4xl flex-col px-4">
        <Header className="max-w-4xl mx-auto" />
        <div className="mb-4 mt-8 flex flex-1 gap-4 overflow-auto max-lg:flex-col">
          <Menu />
          <CardList></CardList>
        </div>
      </main>
    </Suspense>
  );
}
