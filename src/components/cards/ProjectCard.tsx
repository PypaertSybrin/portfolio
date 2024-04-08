import Project from '@/models/Project'
import Image from 'next/image'

const ProjectCard = ({
  project,
  classes,
}: {
  project: Project
  classes: string
}) => {
  return (
    <div className={`flex ${classes} justify-between`}>
      <div className="w-48 h-32 relative">
        <Image
          src={`/${project.pictures[0].src}`}
          alt={project.pictures[0].src}
          fill
          className='items-center'
        ></Image>
      </div>
      <div>
        <h3>{project.name}</h3>
        <p>Read more</p>
      </div>
    </div>
  )
}
export default ProjectCard
