import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-shell flex-col justify-center px-4 pt-28 sm:px-6">
      <div className="flex items-baseline gap-2 text-sm">
        <span className="text-phosphor" aria-hidden>
          $
        </span>
        <span className="text-dim">cd ~/that-page</span>
      </div>
      <p className="mt-3 text-sm text-rose">
        cd: no such file or directory
      </p>
      <h1 className="mt-8 font-sans text-4xl text-fg sm:text-5xl">404</h1>
      <p className="mt-3 max-w-md font-sans text-dim text-pretty">
        Nothing here. The work is all one directory up.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/#work"
          className="border border-phosphor/40 bg-phosphor/10 px-4 py-2.5 text-sm text-phosphor transition-colors hover:bg-phosphor hover:text-ink"
        >
          ./work
        </Link>
        <Link
          href="/"
          className="border border-line px-4 py-2.5 text-sm text-dim transition-colors hover:border-edge hover:text-fg"
        >
          cd ~
        </Link>
      </div>
    </main>
  )
}
