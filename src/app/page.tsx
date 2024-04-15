import Header from '@/components/generic/Header'
import Navigation from '@/components/generic/Navigation'
import Skills from '@/components/generic/Skills'
import ProjectsGrid from '@/components/generic/ProjectsGrid'
import ProjectsSlider from '@/components/generic/ProjectsSlider'
import About from '@/components/generic/About'
import Contact from '@/components/generic/Contact'

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-secundary-950 dark:text-neutral-50 bg-neutral-50 text-secundary-950">
      <Navigation />
      <main>
        <section id="/" className="max-w-screen-xl mx-auto">
          <Header />
        </section>
        <section id="about"className="max-w-screen-xl mx-auto">
            <About />
        </section>
        <section id="skills" className="">
          <div className="max-w-screen-xl mx-auto">
            <Skills />
          </div>
        </section>
        <section id="projects" className="max-w-screen-xl mx-auto">
          <ProjectsGrid />
          <ProjectsSlider />
        </section>
        <section id="contact" className="max-w-screen-xl mx-auto">
          <Contact />
        </section>
      </main>
    </div>
  )
}
