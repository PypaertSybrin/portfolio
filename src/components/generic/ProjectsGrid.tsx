import ProjectsData from '@/data/ProjectsData'
import ProjectCard from '@/components/cards/ProjectCard'

const ProjectsGrid = () => {
  return (
    <div className="py-12 px-4">
      <h1 className="text-4xl font-semibold mb-12 text-center">Projects</h1>

      <div className="flex items-center justify-between gap-8">
        <div className="w-1/3">
          <p className="text-2xl font-semibold">
            A Journey of Learning and Creation{' '}
          </p>
          <p>
            I can proudly say that these are a few of my projects I&apos;ve made
            myself or in a team. It needed hard work en dedication but at the
            end of the day, I was always happy with the final product.
          </p>
        </div>
        <div className="bento w-2/3 h-full">
          {ProjectsData.map((project, index) => (
            <div
              key={project.name}
              className={`h-full w-full p-4 dark:bg-secundary-800 ${
                index == 0 ? 'row-start-2 col-span-2' : ''
              } ${index == 1 ? 'row-start-3 row-span-3 col-start-2' : ''} ${
                index == 2 ? 'row-span-3 col-start-3' : ''
              } ${index == 3 ? 'row-start-4 col-start-3 col-span-2' : ''}`}
            >
              <ProjectCard
                project={project}
                classes={`${
                  index === 0 || index === 3
                    ? 'flex-row-reverse'
                    : 'flex-col-reverse'
                }`}
              />
            </div>
          ))}
          {/* <div className="bg-secundary-800 w-auto h-auto row-start-2 col-span-2">test</div>
            <div className="bg-secundary-800 w-auto h-auto row-start-3 row-span-3 col-start-2">test</div>
            <div className="bg-secundary-800 w-auto h-auto row-span-3 col-start-3">test</div>
            <div className="bg-secundary-800 w-auto h-auto row-start-4 col-start-3 col-span-2">test</div> */}
        </div>
      </div>
    </div>
  )
}
export default ProjectsGrid
