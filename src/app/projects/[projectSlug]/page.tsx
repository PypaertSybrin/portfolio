import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ProjectsData from '@/data/ProjectsData'
import Gallery from '@/components/work/Gallery'
import Colophon from '@/components/shell/Colophon'
import Reveal from '@/components/ui/Reveal'

type Params = { projectSlug: string }

export function generateStaticParams(): Params[] {
  return ProjectsData.map(project => ({ projectSlug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { projectSlug } = await params
  const project = ProjectsData.find(p => p.slug === projectSlug)
  if (!project) return { title: 'Not found' }

  return {
    title: project.name,
    description: `${project.summary}. ${project.context}, ${project.year}.`,
    openGraph: {
      title: `${project.name} | Sybrin Pypaert`,
      description: project.summary,
      type: 'article',
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { projectSlug } = await params
  const index = ProjectsData.findIndex(p => p.slug === projectSlug)
  if (index === -1) notFound()

  const project = ProjectsData[index]
  const previous = ProjectsData[index - 1]
  const next = ProjectsData[index + 1]

  const meta = [
    { key: 'year', value: String(project.year) },
    { key: 'context', value: project.context },
    { key: 'role', value: project.role },
    { key: 'stack', value: project.stack.join(' · ') },
  ]

  return (
    <main className="mx-auto max-w-shell px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      {/* --- Breadcrumb ------------------------------------------------- */}
      <div className="flex flex-wrap items-baseline gap-x-2 text-xs">
        <span className="text-phosphor select-none" aria-hidden>
          $
        </span>
        <span className="text-dim">cd</span>
        <Link href="/#work" className="text-wire hover:underline">
          ~/projects
        </Link>
        <span className="text-faint">/</span>
        <span className="text-fg">{project.slug}</span>
      </div>

      {/* --- Title ------------------------------------------------------ */}
      <header className="mt-8 border-b border-line pb-10">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
          <span className="text-faint">{project.hash}</span>
          {project.featured && (
            <span className="border border-phosphor/40 bg-phosphor/10 px-2 py-0.5 text-[10px] text-phosphor">
              pinned
            </span>
          )}
          {project.tracks.map(track => (
            <span
              key={track}
              className="border border-line px-2 py-0.5 text-[10px] text-dim"
            >
              {track}
            </span>
          ))}
        </div>

        <h1 className="mt-5 font-sans text-4xl leading-tight tracking-tight text-fg sm:text-6xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl font-sans text-lg text-dim text-pretty sm:text-xl">
          {project.summary}
        </p>
      </header>

      {/* --- Body ------------------------------------------------------- */}
      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-14">
        <div className="min-w-0 space-y-12">
          {project.pictures.length > 0 && (
            <Reveal>
              <Gallery pictures={project.pictures} />
            </Reveal>
          )}

          <Reveal>
            <h2 className="label mb-4">the build</h2>
            <p className="max-w-2xl font-sans text-lg leading-relaxed text-fg/90 text-pretty">
              {project.description}
            </p>
          </Reveal>

          <Reveal>
            <h2 className="label mb-4">what it taught me</h2>
            <ul className="max-w-2xl space-y-3">
              {project.learned.map(lesson => (
                <li
                  key={lesson}
                  className="flex gap-3 font-sans leading-relaxed text-dim"
                >
                  <span className="mt-1 shrink-0 text-phosphor-dim" aria-hidden>
                    ▸
                  </span>
                  <span className="text-pretty">{lesson}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* --- Meta rail ------------------------------------------------ */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="pane">
            <div className="border-b border-line px-4 py-2.5">
              <span className="label">metadata</span>
            </div>
            <dl className="divide-y divide-line/60">
              {meta.map(row => (
                <div key={row.key} className="px-4 py-3">
                  <dt className="label">{row.key}</dt>
                  <dd className="mt-1 text-sm text-fg text-pretty">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="pane mt-4 border-l-2 border-l-phosphor/50 p-4">
            <p className="label mb-2">first time</p>
            <p className="font-sans text-sm leading-relaxed text-phosphor/90 text-pretty">
              {project.firstTime}
            </p>
          </div>

          {project.links && project.links.length > 0 && (
            <ul className="mt-4 space-y-2">
              {project.links.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-wire hover:underline"
                  >
                    <span aria-hidden>↗</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>

      {/* --- Prev / next ------------------------------------------------ */}
      <nav
        className="mt-20 grid gap-px border border-line bg-line sm:grid-cols-2"
        aria-label="More projects"
      >
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="group bg-panel px-5 py-5 transition-colors hover:bg-raised"
          >
            <span className="label">← newer</span>
            <span className="mt-1.5 block font-sans text-lg text-fg group-hover:text-phosphor">
              {previous.name}
            </span>
          </Link>
        ) : (
          <span className="bg-panel px-5 py-5">
            <span className="label">← newer</span>
            <span className="mt-1.5 block font-sans text-lg text-faint">
              this is the latest
            </span>
          </span>
        )}

        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group bg-panel px-5 py-5 transition-colors hover:bg-raised sm:text-right"
          >
            <span className="label">older →</span>
            <span className="mt-1.5 block font-sans text-lg text-fg group-hover:text-phosphor">
              {next.name}
            </span>
          </Link>
        ) : (
          <span className="bg-panel px-5 py-5 sm:text-right">
            <span className="label">older →</span>
            <span className="mt-1.5 block font-sans text-lg text-faint">
              end of log
            </span>
          </span>
        )}
      </nav>

      <div className="mt-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-dim transition-colors hover:text-phosphor"
        >
          <span className="text-phosphor" aria-hidden>
            $
          </span>
          cd ..
        </Link>
      </div>

      <Colophon />
    </main>
  )
}
