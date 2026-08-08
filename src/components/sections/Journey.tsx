import Link from 'next/link'
import SectionHead from '@/components/shell/SectionHead'
import Reveal from '@/components/ui/Reveal'
import JourneyData from '@/data/JourneyData'
import ProjectsData from '@/data/ProjectsData'

const refTone = {
  head: 'border-phosphor/50 bg-phosphor/10 text-phosphor',
  branch: 'border-wire/40 bg-wire/10 text-wire',
  tag: 'border-signal/40 bg-signal/10 text-signal',
} as const

const projectName = (slug: string) =>
  ProjectsData.find(project => project.slug === slug)?.name ?? slug

const Journey = () => (
  <section id="journey" className="pt-24 sm:pt-32">
    <SectionHead
      command="git log --graph --decorate"
      title="Journey"
      subtitle="Where I've studied and worked, most recent first, from picking IT in secondary school to building product at OnTracx."
    />

    <ol className="max-w-4xl">
      {JourneyData.map((chapter, index) => {
        const isLast = index === JourneyData.length - 1
        return (
          <Reveal
            as="li"
            key={chapter.hash}
            delay={index * 90}
            className="grid grid-cols-[1.5rem_1fr] gap-x-4 sm:grid-cols-[2rem_1fr] sm:gap-x-6"
          >
            {/* --- Commit rail --------------------------------------- */}
            <div className="relative flex justify-center" aria-hidden>
              <span
                className={`absolute top-0 w-px bg-line ${
                  isLast ? 'h-3' : 'bottom-0'
                }`}
              />
              <span
                className={`relative mt-1 h-3 w-3 rounded-full border-2 ${
                  chapter.current
                    ? 'border-phosphor bg-phosphor shadow-[0_0_0_4px_rgba(92,242,155,0.14)]'
                    : 'border-phosphor-dim bg-ink'
                }`}
              />
            </div>

            {/* --- Commit body --------------------------------------- */}
            <div className={isLast ? 'pb-2' : 'pb-12 sm:pb-14'}>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-xs text-faint">{chapter.hash}</span>
                <span className="text-xs text-dim">{chapter.date}</span>
                {chapter.refs.map(ref => (
                  <span
                    key={ref.label}
                    className={`border px-2 py-0.5 text-[10px] ${refTone[ref.tone]}`}
                  >
                    {ref.label}
                  </span>
                ))}
              </div>

              <h3 className="mt-4 font-sans text-2xl leading-tight text-fg sm:text-3xl">
                {chapter.title}
              </h3>

              <p className="mt-1.5 flex flex-wrap items-baseline gap-x-2 text-sm">
                {chapter.orgHref ? (
                  <Link
                    href={chapter.orgHref}
                    target="_blank"
                    className="tlink"
                  >
                    {chapter.org}
                  </Link>
                ) : (
                  <span className="text-dim">{chapter.org}</span>
                )}
                <span className="text-faint" aria-hidden>
                  ·
                </span>
                <span className="text-dim">{chapter.place}</span>
                <span className="text-faint" aria-hidden>
                  ·
                </span>
                <span className="text-faint">{chapter.span}</span>
              </p>

              <p className="mt-4 max-w-2xl font-sans leading-relaxed text-dim text-pretty">
                {chapter.description}
              </p>

              {chapter.projects.length > 0 && (
                <div className="mt-5">
                  <p className="label mb-2.5">
                    {chapter.projects.length} projects from this chapter
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {chapter.projects.map(slug => (
                      <Link
                        key={slug}
                        href={`/projects/${slug}`}
                        className="border border-line bg-panel px-2.5 py-1 text-xs text-dim transition-colors hover:border-edge hover:text-fg"
                      >
                        {projectName(slug)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        )
      })}
    </ol>
  </section>
)

export default Journey
