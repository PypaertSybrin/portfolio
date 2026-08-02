'use client'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import { CldImage } from 'next-cloudinary'
import ProjectsData from '@/data/ProjectsData'
import { ProjectTrack } from '@/models/Project'

const tracks: { value: ProjectTrack | 'all'; label: string }[] = [
  { value: 'all', label: '--all' },
  { value: 'web', label: '--web' },
  { value: 'mobile', label: '--mobile' },
  { value: 'backend', label: '--backend' },
  { value: 'iot', label: '--iot' },
  { value: 'ai', label: '--ai' },
]

/**
 * The complete log. Rows on the left, a sticky preview on the right that
 * follows whatever row you're pointing at — so you can scan the whole body of
 * work without a single page load.
 */
const WorkIndex = () => {
  const [track, setTrack] = useState<ProjectTrack | 'all'>('all')
  const [activeSlug, setActiveSlug] = useState(ProjectsData[0].slug)

  const rows = useMemo(
    () =>
      track === 'all'
        ? ProjectsData
        : ProjectsData.filter(project => project.tracks.includes(track)),
    [track],
  )

  // Keep the preview pointed at something that's actually in the list.
  const active =
    rows.find(project => project.slug === activeSlug) ?? rows[0] ?? null
  const cover = active?.pictures[0]

  return (
    <div>
      {/* --- Filter flags ------------------------------------------------ */}
      <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-2 border-b border-line pb-4">
        <span className="text-xs text-faint" aria-hidden>
          filter
        </span>
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter projects">
          {tracks.map(option => {
            const isActive = track === option.value
            const count =
              option.value === 'all'
                ? ProjectsData.length
                : ProjectsData.filter(p => p.tracks.includes(option.value as ProjectTrack))
                    .length
            if (count === 0) return null
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setTrack(option.value)}
                aria-pressed={isActive}
                className={`border px-2.5 py-1 text-xs transition-colors ${
                  isActive
                    ? 'border-phosphor/50 bg-phosphor/10 text-phosphor'
                    : 'border-line text-dim hover:border-edge hover:text-fg'
                }`}
              >
                {option.label}
                <span className="ml-1.5 text-[10px] text-faint">{count}</span>
              </button>
            )
          })}
        </div>
        <span className="leader hidden sm:block" />
        <span className="label hidden sm:inline">
          {rows.length} of {ProjectsData.length}
        </span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:gap-10">
        {/* --- Rows ------------------------------------------------------ */}
        <ul className="divide-y divide-line/70 border-y border-line">
          {rows.map(project => {
            const isActive = active?.slug === project.slug
            return (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  onMouseEnter={() => setActiveSlug(project.slug)}
                  onFocus={() => setActiveSlug(project.slug)}
                  className={`group flex flex-col gap-1.5 px-3 py-4 transition-colors sm:flex-row sm:items-baseline sm:gap-4 ${
                    isActive ? 'bg-raised' : 'hover:bg-raised/60'
                  }`}
                >
                  <span className="hidden shrink-0 text-xs text-faint sm:inline">
                    {project.hash}
                  </span>

                  <span className="min-w-0 shrink-0">
                    <span
                      className={`block truncate font-sans text-base transition-colors sm:text-lg ${
                        isActive ? 'text-phosphor' : 'text-fg'
                      }`}
                    >
                      {project.name}
                    </span>
                    <span className="mt-0.5 block font-sans text-xs text-faint sm:hidden">
                      {project.summary}
                    </span>
                  </span>

                  <span className="leader hidden sm:block" />

                  <span className="hidden max-w-[16rem] shrink-0 truncate text-xs text-dim lg:inline">
                    {project.stack.join(' · ')}
                  </span>
                  <span className="shrink-0 text-xs text-faint">{project.year}</span>
                  <span
                    className={`hidden shrink-0 text-xs transition-transform sm:inline ${
                      isActive
                        ? 'translate-x-0.5 text-phosphor'
                        : 'text-faint'
                    }`}
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* --- Sticky preview -------------------------------------------- */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            {active && (
              <div key={active.slug} className="pane animate-fade-in">
                <div className="flex items-baseline gap-2 border-b border-line px-3 py-2 text-[10px]">
                  <span className="text-phosphor" aria-hidden>
                    ▸
                  </span>
                  <span className="truncate text-dim">
                    projects/{active.slug}
                  </span>
                  <span className="leader" />
                  <span className="text-faint">{active.role}</span>
                </div>

                <div className="crt relative aspect-[4/3] overflow-hidden bg-raised">
                  {cover ? (
                    <CldImage
                      src={`docs/${cover.src}`}
                      alt={cover.alt}
                      width={cover.width}
                      height={cover.height}
                      sizes="22rem"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <pre className="text-[10px] leading-tight text-faint" aria-hidden>
                        {`  ┌───────────────┐
  │               │
  │   no capture  │
  │   — read the  │
  │   write-up    │
  │               │
  └───────────────┘`}
                      </pre>
                    </div>
                  )}
                </div>

                <div className="space-y-3 p-4">
                  <p className="font-sans text-sm text-fg text-pretty">
                    {active.summary}
                  </p>
                  <div>
                    <p className="label mb-1">first time</p>
                    <p className="font-sans text-xs leading-relaxed text-phosphor/85 text-pretty">
                      {active.firstTime}
                    </p>
                  </div>
                  <p className="text-[11px] text-faint">{active.context}</p>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}

export default WorkIndex
