import ProjectsData from '@/data/ProjectsData'
import ProjectCard from '@/components/cards/ProjectCard'

const ProjectsGrid = () => {
  return (
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-12">
        <div className="lg:w-2/6 text-center lg:text-left">
          <p className="text-xl sm:text-2xl lg:text-4xl font-semibold mb-8 text-primary-dark dark:text-primary-neutral">
            A Journey of Learning and Creation{' '}
          </p>
          <p className="mb-4 sm:text-lg text-sm">
            I&apos;m excited to share a glimpse into some of the projects
            I&apos;ve been involved in.
          </p>
          <p className="sm:text-lg text-sm">
            {' '}
            Whether flying solo or as part of a team, each one required a lot of
            hard graft and dedication. But you know what? At the end of the day,
            seeing those finished products gave me a real buzz.
          </p>
        </div>
        <div className="bento lg:w-4/6">
          {ProjectsData.filter(project => project.inGrid).map(
            (project, index) => (
              <div
                key={project.name}
                className={`dark:bg-secundary-900 bg-neutral-300 rounded-xl ${
                  index === 0 ? '' : ''
                } ${index === 1 ? 'sm:row-start-2 sm:row-span-2' : ''} ${
                  index === 2 ? 'sm:col-start-2 sm:row-span-2' : ''
                } ${index === 3 ? '' : ''}`}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ),
          )}
        </div>
      </div>
  )
}

export default ProjectsGrid
