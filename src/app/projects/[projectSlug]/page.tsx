'use client'
import Project from '@/models/Project'
import ProjectsData from '@/data/ProjectsData'
import Navigation from '@/components/generic/Navigation'
import Footer from '@/components/generic/Footer'
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarouselProjectDetails from '@/components/carousel/EmblaCarouselProjectDetails'
import { CldImage } from 'next-cloudinary'

const ProjectPage = ({ params }: { params: { projectSlug: string } }) => {
  const project: Project | undefined = ProjectsData.find(
    (project: Project) => project.slug === params.projectSlug,
  )

  const OPTIONS: EmblaOptionsType = {}
  const SLIDES = project?.pictures || []

  return (
    <div className="min-h-screen dark:bg-secundary-950 dark:text-secundary-50 bg-secundary-50 text-secundary-950">
      <div className="max-w-screen-xl mx-auto">
        <Navigation />
        <div className="sm:h-screen h-auto grid place-items-center pt-16 sm:pt-0">
          <div className="grid sm:grid-cols-2">
            <div className="px-4">
              {SLIDES.length === 1 ? (
                <CldImage src={`docs/${project?.pictures[0].src}`} alt={project?.pictures[0].alt!} width={project?.pictures[0].width} height={project?.pictures[0].height} crop='fill' className='rounded-xl'/>
              ) : (
                <EmblaCarouselProjectDetails
                  slides={SLIDES}
                  options={OPTIONS}
                />
              )}
            </div>
            <div className="px-4 order-first sm:order-last mb-8 sm:mb-0">
              <h1 className="text-5xl mb-2 font-semibold z-100">
                {project?.name}
              </h1>
              <p className="text-3xl font-semibold mb-8 text-secundary-800">
                {project?.subname}
              </p>
              <p className="text-lg">{project?.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:absolute bottom-0 left-0 right-0">
        <Footer />
      </div>
    </div>
  )
}
export default ProjectPage
