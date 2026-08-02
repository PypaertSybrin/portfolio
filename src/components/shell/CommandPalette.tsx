'use client'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import ProjectsData from '@/data/ProjectsData'
import { navItems, OPEN_PALETTE_EVENT } from '@/data/NavData'
import { site } from '@/data/SiteData'

type Entry = {
  id: string
  label: string
  hint: string
  group: 'go' | 'project' | 'link'
  run: () => void
}

/**
 * ⌘K / Ctrl+K jump-to. Sections, every project, and the outbound links.
 * It is the one interaction on the site that only a developer will look for,
 * which is exactly why it is here.
 */
const CommandPalette = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setActive(0)
  }, [])

  const goToSection = useCallback(
    (id: string) => {
      close()
      // Let the overlay unmount before scrolling, or the scroll gets eaten.
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: 'start' })
        history.replaceState(null, '', `#${id}`)
      })
    },
    [close],
  )

  const entries = useMemo<Entry[]>(() => {
    const sections: Entry[] = navItems.map(item => ({
      id: `go:${item.id}`,
      label: item.label,
      hint: item.hint,
      group: 'go',
      run: () => goToSection(item.id),
    }))

    const projects: Entry[] = ProjectsData.map(project => ({
      id: `project:${project.slug}`,
      label: project.name,
      hint: project.stack.join(' · '),
      group: 'project',
      run: () => {
        close()
        router.push(`/projects/${project.slug}`)
      },
    }))

    const links: Entry[] = [
      { id: 'link:cv', label: 'Download CV', hint: 'PDF', href: site.cv },
      { id: 'link:gh', label: 'GitHub', hint: 'PypaertSybrin', href: site.github },
      { id: 'link:li', label: 'LinkedIn', hint: 'sybrin-pypaert', href: site.linkedin },
      { id: 'link:mail', label: 'Email', hint: site.email, href: `mailto:${site.email}` },
      { id: 'link:ontracx', label: 'OnTracx', hint: 'Where I work', href: site.companyHref },
    ].map(({ href, ...rest }) => ({
      ...rest,
      group: 'link' as const,
      run: () => {
        close()
        window.open(href, href.startsWith('mailto:') ? '_self' : '_blank')
      },
    }))

    return [...sections, ...projects, ...links]
  }, [goToSection, router, close])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return entries
    return entries.filter(entry =>
      `${entry.label} ${entry.hint} ${entry.group}`.toLowerCase().includes(q),
    )
  }, [entries, query])

  // Global open shortcut, plus the event the top bar dispatches.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen(prev => !prev)
      }
    }
    const onOpen = () => setOpen(true)

    window.addEventListener('keydown', onKey)
    window.addEventListener(OPEN_PALETTE_EVENT, onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpen)
    }
  }, [])

  // Lock the page and focus the input while open.
  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    inputRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  useEffect(() => setActive(0), [query])

  // Keep the highlighted row in view when arrowing past the fold.
  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>('[data-active="true"]')
      ?.scrollIntoView({ block: 'nearest' })
  }, [active])

  if (!open) return null

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      close()
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive(i => (results.length ? (i + 1) % results.length : 0))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive(i => (results.length ? (i - 1 + results.length) % results.length : 0))
    } else if (event.key === 'Enter') {
      event.preventDefault()
      results[active]?.run()
    }
  }

  const groupLabel: Record<Entry['group'], string> = {
    go: 'jump to',
    project: 'projects',
    link: 'elsewhere',
  }

  return (
    <div
      className="fixed inset-0 z-50 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
        onClick={close}
      />
      <div
        className="relative mx-auto mt-[12vh] w-[min(38rem,92vw)] pane shadow-2xl shadow-black/60"
        onKeyDown={onKeyDown}
      >
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="text-phosphor select-none" aria-hidden>
            $
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder="jump to a section, a project, a link…"
            className="w-full bg-transparent text-sm text-fg outline-none placeholder:text-faint"
            aria-label="Search"
          />
          <kbd className="kbd">esc</kbd>
        </div>

        <ul ref={listRef} className="max-h-[52vh] overflow-y-auto py-2">
          {results.length === 0 && (
            <li className="px-4 py-6 text-center text-xs text-faint">
              no matches — try &quot;flutter&quot;, &quot;iot&quot;, &quot;journey&quot;
            </li>
          )}
          {results.map((entry, index) => {
            const isFirstOfGroup =
              index === 0 || results[index - 1].group !== entry.group
            return (
              <li key={entry.id}>
                {isFirstOfGroup && (
                  <div className="label px-4 pb-1 pt-3">
                    {groupLabel[entry.group]}
                  </div>
                )}
                <button
                  type="button"
                  data-active={index === active}
                  onMouseMove={() => setActive(index)}
                  onClick={() => entry.run()}
                  className={`flex w-full items-baseline gap-3 px-4 py-2 text-left text-sm transition-colors ${
                    index === active
                      ? 'bg-raised text-fg'
                      : 'text-dim hover:bg-raised/60'
                  }`}
                >
                  <span
                    className={
                      index === active ? 'text-phosphor' : 'text-faint'
                    }
                    aria-hidden
                  >
                    ▸
                  </span>
                  <span className="shrink-0">{entry.label}</span>
                  <span className="leader" />
                  <span className="truncate text-xs text-faint">
                    {entry.hint}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3 border-t border-line px-4 py-2 text-[10px] text-faint">
          <span>
            <kbd className="kbd">↑</kbd> <kbd className="kbd">↓</kbd> navigate
          </span>
          <span>
            <kbd className="kbd">⏎</kbd> open
          </span>
          <span className="leader" />
          <span>{results.length} results</span>
        </div>
      </div>
    </div>
  )
}

export default CommandPalette
