import Header from "@/components/generic/Header";
import Navigation from "@/components/generic/Navigation";
import Skills from "@/components/generic/Skills";
import ProjectsGrid from "@/components/generic/ProjectsGrid";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-secundary-950 dark:text-secundary-50 bg-secundary-50 text-secundary-950">
      <Navigation />
      <main>
        <section id="/" className="max-w-screen-xl mx-auto">
          <Header />
        </section>
        <section id="skills" className="dark:bg-secundary-900">
          <div className="max-w-screen-xl mx-auto">
            <Skills />
          </div>
        </section>
        <section id="projects" className="max-w-screen-xl mx-auto">
          <ProjectsGrid />
        </section>
      </main>
    </div>
  );
}
