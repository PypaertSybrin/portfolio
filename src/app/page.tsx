import Header from '@/components/generic/Header'
import Navigation from '@/components/generic/Navigation'
import Skills from '@/components/generic/Skills'
import ProjectsGrid from '@/components/generic/ProjectsGrid'
import ProjectsSlider from '@/components/generic/ProjectsSlider'
import About from '@/components/generic/About'
import Contact from '@/components/generic/Contact'
import Footer from '@/components/generic/Footer'

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-secundary-950 dark:text-secundary-50 bg-secundary-50 text-secundary-950">
      <Navigation />
      <main className='max-w-screen-xl mx-auto'>
        <section id="/">
          <Header />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
            <Skills />
        </section>
        <section id="projects">
          <ProjectsGrid />
          <ProjectsSlider />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  )
}
