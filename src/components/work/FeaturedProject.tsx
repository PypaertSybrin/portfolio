import Link from 'next/link'
import CldImage from '@/components/ui/CloudImage'
import Project from '@/models/Project'
import Reveal from '@/components/ui/Reveal'

/**
 * A full case-study block for the three projects worth stopping on. Image side
 * alternates so the column of blocks doesn't read as a table.
 */
const FeaturedProject = ({
  project,
  index,
}: {
  project: Project
  index: number
}) => {
  const flipped = index % 2 === 1
  const cover = project.pictures[0]

  return (
    <Reveal as="li" className="pane group relative">
      {/* --- Meta bar ------------------------------------------------- */}
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-line px-4 py-2.5 text-[11px] sm:px-5">
        <span className="text-faint">{project.hash}</span>
        <span className="text-dim">{project.year}</span>
        <span className="text-faint" aria-hidden>
          ·
        </span>
        <span className="text-dim">{project.context}</span>
        <span className="leader" />
        <span className="label">{project.role}</span>
      </div>

      <div className="grid lg:grid-cols-2">
        {/* --- Image ---------------------------------------------------- */}
        {cover && (
          <div
            className={`crt relative aspect-[4/3] overflow-hidden bg-raised lg:aspect-auto lg:min-h-[24rem] ${
              flipped ? 'lg:order-last' : ''
            }`}
          >
            <CldImage
              src={`docs/${cover.src}`}
              alt={cover.alt}
              width={cover.width}
              height={cover.height}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent lg:from-ink/20"
              aria-hidden
            />
          </div>
        )}

        {/* --- Copy ------------------------------------------------------ */}
        <div
          className={`flex flex-col justify-center gap-5 p-6 sm:p-8 lg:p-10 ${
            cover ? '' : 'lg:col-span-2'
          } ${flipped ? 'lg:border-r lg:border-line' : 'lg:border-l lg:border-line'}`}
        >
          <div>
            <h3 className="font-sans text-3xl leading-tight text-fg sm:text-4xl">
              {project.name}
            </h3>
            <p className="mt-2 font-sans text-base text-dim text-pretty sm:text-lg">
              {project.summary}
            </p>
          </div>

          <div className="border-l-2 border-phosphor/40 pl-4">
            <p className="label mb-1.5">first time</p>
            <p className="font-sans text-sm leading-relaxed text-phosphor/90 text-pretty">
              {project.firstTime}
            </p>
          </div>

          <ul className="flex flex-wrap gap-1.5">
            {project.stack.map(item => (
              <li
                key={item}
                className="border border-line px-2 py-0.5 text-[11px] text-dim"
              >
                {item}
              </li>
            ))}
          </ul>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex w-fit items-center gap-2 text-sm text-phosphor transition-colors hover:text-fg"
          >
            <span aria-hidden>$</span>
            <span className="underline decoration-phosphor/30 underline-offset-4">
              open write-up
            </span>
            <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
              →
            </span>
            <span className="absolute inset-0" aria-hidden />
          </Link>
        </div>
      </div>
    </Reveal>
  )
}

export default FeaturedProject
