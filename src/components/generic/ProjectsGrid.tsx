import ProjectsData from '@/data/ProjectsData'
import ProjectCard from '@/components/cards/ProjectCard'

const ProjectsGrid = () => {
  return (
    <div className="py-12 px-4">
      <h1 className="text-4xl font-semibold mb-12 text-center">Projects</h1>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-2/5 px-8">
          <p className="text-2xl lg:text-4xl font-semibold mb-6 text-primary-neutral">
            A Journey of Learning and Creation{' '}
          </p>
          <p className='mb-2'>
            I&apos;m excited to share a glimpse into some of the projects
            I&apos;ve been involved in.
          </p>
          <p>
            {' '}
            Whether flying solo or as part of a team, each one required a lot of
            hard graft and dedication. But you know what? At the end of the day,
            seeing those finished products gave me a real buzz.
          </p>
        </div>
        <div className="bento lg:w-3/5 h-full">
          {ProjectsData.filter(project => project.inGrid).map((project, index) => (
            <div
              key={project.name}
              className={`p-4 dark:bg-secundary-800 bg-secundary-100 ${
                index === 0 ? 'xl:row-start-2 xl:col-span-2' : ''
              } ${index === 1 ? 'xl:row-start-3 xl:row-span-3 xl:col-start-2 sm:row-start-2 sm:row-span-2' : ''} ${
                index === 2 ? 'xl:row-span-3 xl:col-start-3 sm:col-start-2 sm:row-span-2' : ''
              } ${index === 3 ? 'xl:row-start-4 xl:col-start-3 xl:col-span-2' : ''}`}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsGrid
