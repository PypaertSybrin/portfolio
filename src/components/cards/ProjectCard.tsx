import Project from '@/models/Project'
import Image from 'next/image'

const ProjectCard = ({
  project,
  index,
}: {
  project: Project
  index: number
}) => {
  return (
    <div className={`grid ${index === 0 || index === 3 ? 'grid-cols-2': 'grid-cols-2 sm:grid-cols-1'}`}>
      <div className="relative">
        <Image
          src={`/${project.pictures[0].src}`}
          alt={project.pictures[0].src}
          // width en height moet enkel niet definiëren als je de image importeert via een import statement
          width={project.pictures[0].width}
          height={project.pictures[0].height}
          className="h-full w-full object-cover"
        ></Image>
      </div>
      <div className="self-start order-first">
        <h3>{project.name}</h3>
        <p>Read more</p>
      </div>
    </div>
  )
}
export default ProjectCard
