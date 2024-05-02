'use client'
import Header from '@/components/generic/Header'
import Navigation from '@/components/generic/Navigation'
import Skills from '@/components/generic/Skills'
import ProjectsGrid from '@/components/generic/ProjectsGrid'
import ProjectsSlider from '@/components/generic/ProjectsSlider'
import About from '@/components/generic/About'
import Contact from '@/components/generic/Contact'
import Footer from '@/components/generic/Footer'
import { useInView } from 'react-hook-inview'
import { useEffect, useState } from 'react'

export default function Home() {
  const [active, setActive] = useState(0)

  const [homeRef, setHomeRef] = useInView({threshold: 0.5})
  const [aboutRef, setAboutRef] = useInView({threshold: 0.5})
  const [skillsRef, setSkillsRef] = useInView({threshold: 0.5})
  const [projectsRef, setProjectsRef] = useInView({threshold: 0.2})
  const [contactRef, setContactRef] = useInView({threshold: 0.5})

  useEffect(() => {
    if(setHomeRef) setActive(0)
    if(setAboutRef) setActive(1)
    if(setSkillsRef) setActive(2)
    if(setProjectsRef) setActive(3)
    if(setContactRef) setActive(4)
  
  }, [setHomeRef, setAboutRef, setSkillsRef, setProjectsRef, setContactRef])
  return (
    <div className="min-h-screen dark:bg-secundary-950 dark:text-secundary-50 bg-secundary-50 text-secundary-950">
      <Navigation active={active}/>
      <main className='max-w-screen-xl mx-auto'>
        <section id="/" ref={homeRef}>
          <Header />
        </section>
        <section id="about" ref={aboutRef}>
          <About />
        </section>
        <section id="skills" ref={skillsRef}>
            <Skills />
        </section>
        <section id="projects" ref={projectsRef}>
          <ProjectsGrid />
          <ProjectsSlider />
        </section>
        <section id="contact" ref={contactRef}>
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  )
}
