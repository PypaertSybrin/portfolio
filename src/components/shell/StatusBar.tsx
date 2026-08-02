'use client'
import { useEffect, useState } from 'react'
import ProjectsData from '@/data/ProjectsData'

/**
 * tmux/vim-style status line pinned to the bottom of the viewport. Purely
 * decorative chrome, but it is what makes the page feel like an environment
 * rather than a document.
 */
const StatusBar = () => {
  const [clock, setClock] = useState<string | null>(null)

  useEffect(() => {
    // Rendered client-side only — a server-rendered clock would hydrate wrong.
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Europe/Brussels',
        }),
      )
    tick()
    const id = setInterval(tick, 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 h-7 border-t border-line bg-panel/95 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-shell items-center gap-3 px-4 text-[10px] sm:px-6">
        {/* Chrome, not information — kept as texture rather than shouted, so
            it doesn't outrank anything a visitor actually needs to read. */}
        <span className="border border-phosphor-dim/40 px-2 py-[2px] uppercase tracking-[0.14em] text-phosphor-dim">
          normal
        </span>
        <span className="text-dim">~/portfolio</span>
        <span className="hidden text-faint sm:inline">·</span>
        <span className="hidden text-faint sm:inline">main</span>

        <span className="leader" />

        <span className="hidden text-dim md:inline">
          {ProjectsData.length} projects
        </span>
        <span className="hidden text-faint md:inline">·</span>
        <span className="text-dim">
          {clock ?? '--:--'} <span className="text-faint">CET</span>
        </span>
      </div>
    </div>
  )
}

export default StatusBar
