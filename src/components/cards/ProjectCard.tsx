'use client'
import Project from '@/models/Project'
import { CldImage } from 'next-cloudinary'
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
            ? 'grid-cols-[2fr,2.5fr]'
            : 'grid-cols-[2fr,2.5fr] sm:grid-cols-1'
        }`}
      >
        <div className="relative place-self-end">
          <CldImage
            width={project.pictures[0].width}
            height={project.pictures[0].height}
            src={`docs/${project.pictures[0].src}`}
            alt={project.pictures[0].alt}
            crop="fill"
            className="rounded-xl"
            priority={project.pictures[0].src === 'TargetGoal.png' ? true : false}
          />
        </div>
        <div className="self-start order-first">
          <h3 className={`text-lg font-semibold`}>{project.name}</h3>
          <p className="dark:text-secundary-200 text-secundary-800">{project.subname}</p>
        </div>
      </div>
      <div className="font-semibold rounded-xl text-lg absolute inset-0 flex flex-col justify-center text-center bg-black hover:bg-opacity-70 bg-opacity-0 opacity-0 hover:opacity-100 transition duration-300">
        <Link href={`/projects/${project.slug}`} className="text-2xl text-white">
          Read more
        </Link>
      </div>
    </div>
  )
}
export default ProjectCard
