import Header from "@/components/generic/Header";
import Navigation from "@/components/generic/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-neutral-900 dark:text-neutral-50 bg-neutral-50 text-neutral-900">
      <Navigation />
      <main>
        <Header />
      </main>
    </div>
  );
}
