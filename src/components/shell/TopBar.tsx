'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { navItems, OPEN_PALETTE_EVENT } from '@/data/NavData'
import { site } from '@/data/SiteData'

/**
 * Slim window chrome pinned to the top. Left side is the shell prompt (and the
 * home link), right side is the section list plus the ⌘K trigger.
 */
const TopBar = () => {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /**
   * Scroll spy for the active section.
   *
   * Deliberately computed from scroll position rather than with an
   * IntersectionObserver. The observer version only updated when an
   * intersection *changed*, so it could sit on a stale section after a
   * deep link, a restored scroll position, or a programmatic jump, and it
   * had a dead zone over #stack, which has no nav entry of its own.
   * Recomputing is cheap for six elements and is always right.
   *
   * Sections that don't exist on this page are skipped, so the same bar
   * works unchanged on project detail pages.
   */
  useEffect(() => {
    // #stack sits between work and contact and reads as part of the work
    // section, so it lights the same nav item rather than nothing.
    const spyIds = [...navItems.map(item => item.id), 'stack']
    const readsAs: Record<string, string> = { stack: 'work' }

    const sections = spyIds
      .map(id => ({ id, el: document.getElementById(id) }))
      .filter((s): s is { id: string; el: HTMLElement } => Boolean(s.el))
      // Document order, so the last match below is the one we're inside.
      .sort((a, b) => a.el.getBoundingClientRect().top - b.el.getBoundingClientRect().top)

    if (sections.length === 0) return

    let frame = 0

    const measure = () => {
      frame = 0
      // Treat a line ~30% down the viewport as "what you're reading".
      const readingLine = window.scrollY + window.innerHeight * 0.3
      let current: string | null = null

      for (const section of sections) {
        const top = section.el.getBoundingClientRect().top + window.scrollY
        if (top <= readingLine) current = readsAs[section.id] ?? section.id
      }

      // The very bottom of the page always belongs to the last section,
      // otherwise the footer leaves the nav lit on whatever came before.
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      if (atBottom) current = navItems[navItems.length - 1].id

      setActiveId(current)
    }

    const schedule = () => {
      if (frame) return
      frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    // Background tabs stop running rAF, so re-measure on the way back in.
    document.addEventListener('visibilitychange', measure)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      document.removeEventListener('visibilitychange', measure)
    }
  }, [])

  const openPalette = () => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT))

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-line bg-ink/85 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-shell items-center gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="group flex shrink-0 items-baseline gap-1.5 text-xs sm:text-sm"
          aria-label="Home"
        >
          <span className="text-phosphor-dim transition-colors group-hover:text-phosphor">
            {site.handle}
          </span>
          <span className="text-faint">@</span>
          <span className="text-dim">pypaert.be</span>
          <span className="hidden text-faint sm:inline">:~</span>
          <span className="text-phosphor" aria-hidden>
            $
          </span>
        </Link>

        <span className="leader hidden sm:block" />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
          {navItems.map(item => {
            const isActive = activeId === item.id
            return (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                className={`px-2.5 py-1 text-xs transition-colors ${
                  isActive ? 'text-phosphor' : 'text-dim hover:text-fg'
                }`}
              >
                <span
                  aria-hidden
                  className={isActive ? 'text-phosphor' : 'text-transparent'}
                >
                  ▸
                </span>{' '}
                {item.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          onClick={openPalette}
          className="ml-auto flex items-center gap-2 border border-line bg-panel px-2.5 py-1.5 text-[11px] text-dim transition-colors hover:border-edge hover:text-fg md:ml-0"
          aria-label="Open command palette"
        >
          <span aria-hidden>⌘</span>
          <span className="hidden sm:inline">K</span>
          <span className="hidden text-faint lg:inline">jump to…</span>
        </button>

        <button
          type="button"
          onClick={() => setMenuOpen(open => !open)}
          className="text-dim transition-colors hover:text-fg md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span aria-hidden className="text-lg leading-none">
            {menuOpen ? '×' : '≡'}
          </span>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-ink/95 backdrop-blur-md md:hidden"
          aria-label="Sections"
        >
          <ul className="mx-auto max-w-shell px-4 py-2">
            {navItems.map(item => (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-3 py-2.5 text-sm text-dim"
                >
                  <span className="text-phosphor" aria-hidden>
                    $
                  </span>
                  <span>{item.label}</span>
                  <span className="leader" />
                  <span className="text-[10px] text-faint">{item.hint}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default TopBar
