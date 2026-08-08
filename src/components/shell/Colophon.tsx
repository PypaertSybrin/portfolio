import Link from 'next/link'
import { site } from '@/data/SiteData'

const Colophon = () => (
  <footer className="mt-28 border-t border-line pt-8 sm:mt-36">
    <div className="flex items-baseline gap-2 text-sm">
      <span className="text-phosphor select-none" aria-hidden>
        $
      </span>
      <span className="text-dim">exit</span>
    </div>
    <p className="mt-2 text-xs text-faint">
      logout. connection to pypaert.be closed.
    </p>

    <div className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-2 text-[11px] text-faint">
      <span>© {new Date().getFullYear()} {site.name}</span>
      <span aria-hidden>·</span>
      <span>Next.js, Tailwind, no template</span>
      <span className="leader hidden sm:block" />
      <Link
        href={site.github}
        target="_blank"
        rel="noreferrer"
        className="transition-colors hover:text-dim"
      >
        source
      </Link>
    </div>
  </footer>
)

export default Colophon
