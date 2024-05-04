import Header from '@/components/generic/Header'
import Navigation from '@/components/generic/Navigation'
import Skills from '@/components/generic/Skills'
import ProjectsGrid from '@/components/generic/ProjectsGrid'
import ProjectsSlider from '@/components/generic/ProjectsSlider'
import About from '@/components/generic/About'
import Contact from '@/components/generic/Contact'
import Footer from '@/components/generic/Footer'
import Reveal from '@/components/view/Reveal'

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-secundary-950 dark:text-secundary-50 bg-secundary-50 text-secundary-950">
      <Navigation />
      <main className="max-w-screen-xl mx-auto">
        <section id="/">
          <Header />
        </section>
        <section id="about" className="sm:py-16 py-8 px-4">
          <Title title="About me" />
          <About />
        </section>
        <section id="skills" className="sm:py-16 py-8 px-4">
          <Title title="Skills" />
          <Skills />
        </section>
        <section id="projects" className="sm:py-16 py-8 px-4">
          <Title title="Projects" />
          <ProjectsGrid />
          <ProjectsSlider />
        </section>
        <section id="contact" className="sm:py-16 py-8 px-4">
          <Title title="Contact" />
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  )
}

const Title = ({ title }: { title: string }) => {
  return (
    <Reveal threshold={0.7} duration={'800ms'} x={0} y={-20}>
      <h1
        className={`text-4xl lg:text-5xl font-semibold ${
          title === 'Contact' ? 'mb-4' : 'mb-12'
        } text-center`}
      >
        {title}
      </h1>
    </Reveal>
  )
}
