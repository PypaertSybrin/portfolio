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

  // Scroll spy. Only the sections that exist on this page are observed, so the
  // same bar works unchanged on project detail pages.
  useEffect(() => {
    const sections = navItems
      .map(item => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 },
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
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
