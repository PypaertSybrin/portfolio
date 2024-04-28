'use client'
import Project from '@/models/Project'
import { CldImage } from 'next-cloudinary';
import Link from 'next/link'

const ProjectCard = ({
  project,
  index,
}: {
  project: Project
  index: number
}) => {
  return (
    <div className="relative h-full">
      <div
        className={`h-full p-4 grid gap-2 ${
          index === 0 || index === 3
            ? 'grid-cols-2'
            : 'grid-cols-2 sm:grid-cols-1'
        }`}
      >
        <div className="relative">
          <CldImage
            width={project.pictures[0].width}
            height={project.pictures[0].height}
            src={`docs/${project.pictures[0].src}`}
            alt={project.pictures[0].alt}
            className="rounded-xl h-full w-full object-cover"
          />
        </div>
        <div className="self-start order-first">
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="text-secundary-200">{project.subname}</p>
        </div>
      </div>
      <div className="font-semibold rounded-xl text-lg absolute inset-0 flex flex-col justify-center text-center bg-black hover:bg-opacity-70 bg-opacity-0 opacity-0 hover:opacity-100 transition duration-300">
      <Link href={`/projects/${project.slug}`} className="text-2xl">Read more</Link >
      </div>
    </div>
  )
}
export default ProjectCard
