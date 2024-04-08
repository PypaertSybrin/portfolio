import Header from "@/components/generic/Header";
import Navigation from "@/components/generic/Navigation";
import Skills from "@/components/generic/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-neutral-900 dark:text-neutral-50 bg-neutral-50 text-neutral-900">
      <Navigation />
      <main>
        <section className="max-w-screen-xl mx-auto">
          <Header />
        </section>
        <section className="dark:bg-neutral-700">
          <div className="max-w-screen-xl mx-auto">
            <Skills />
          </div>
        </section>
      </main>
    </div>
  );
}
