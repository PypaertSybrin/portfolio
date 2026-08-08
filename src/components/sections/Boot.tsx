import Link from 'next/link'
import CldImage from '@/components/ui/CloudImage'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { LuArrowDown, LuDownload, LuMail } from 'react-icons/lu'
import TypeLine from '@/components/ui/TypeLine'
import Reveal from '@/components/ui/Reveal'
import { site } from '@/data/SiteData'

const Boot = () => (
  <section id="whoami" className="relative pt-28 sm:pt-36">
    {/* Centred on wide screens: with the intro trimmed, the text column is
        much shorter than the portrait and top-aligning left a dead gap. */}
    <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
      {/* --- Left: the statement ------------------------------------- */}
      <div>
        <Reveal className="flex items-baseline gap-2 text-sm">
          <span className="text-phosphor select-none" aria-hidden>
            $
          </span>
          <span className="text-dim">whoami</span>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-6 text-xs uppercase tracking-[0.34em] text-dim sm:text-sm">
            {site.name}
          </p>
        </Reveal>

        <h1 className="mt-3 text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-fg sm:text-6xl lg:text-[4.4rem]">
          <TypeLine text={site.thesis} speed={62} />
        </h1>

        <Reveal delay={160}>
          <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-dim text-pretty">
            Full-stack developer at{' '}
            <Link href={site.companyHref} target="_blank" className="tlink">
              OnTracx
            </Link>
            . Every project here started in something I didn&apos;t know how to
            use yet.
          </p>
        </Reveal>

        <Reveal delay={240} className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            href="#work"
            className="group flex items-center gap-2 border border-phosphor/40 bg-phosphor/10 px-4 py-2.5 text-sm text-phosphor transition-colors hover:bg-phosphor hover:text-ink"
          >
            <span aria-hidden>./</span>
            <span>see the work</span>
            <span className="translate-y-px text-xs transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
          <Link
            href="#journey"
            className="border border-line px-4 py-2.5 text-sm text-dim transition-colors hover:border-edge hover:text-fg"
          >
            ./journey
          </Link>
          <a
            href={site.cv}
            download
            className="flex items-center gap-2 px-2 py-2.5 text-sm text-dim transition-colors hover:text-fg"
          >
            <LuDownload className="h-4 w-4" aria-hidden />
            resume.pdf
          </a>
        </Reveal>

        <Reveal delay={300} className="mt-8 flex items-center gap-5">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="text-dim transition-colors hover:text-phosphor"
          >
            <LuMail className="h-5 w-5" />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-dim transition-colors hover:text-phosphor"
          >
            <SiGithub className="h-5 w-5" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-dim transition-colors hover:text-phosphor"
          >
            <SiLinkedin className="h-5 w-5" />
          </a>
          <span className="leader max-w-[6rem]" />
          <span className="flex items-center gap-2 text-[11px] text-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-phosphor" aria-hidden />
            open to a good conversation
          </span>
        </Reveal>
      </div>

      {/* --- Right: the portrait, framed as a file ------------------- */}
      <Reveal delay={120} className="group">
        <figure className="pane relative overflow-hidden">
          <figcaption className="flex items-center gap-2 border-b border-line px-3 py-2 text-[10px] text-faint">
            <span className="flex gap-1.5" aria-hidden>
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-line" />
            </span>
            <span className="ml-1">~/media/sybrin.jpg</span>
            <span className="leader" />
            <span className="hidden sm:inline">hover to develop</span>
          </figcaption>

          <div className="crt relative aspect-[4/5] overflow-hidden bg-raised">
            <CldImage
              src={site.portrait}
              alt={`${site.name}, portrait`}
              width={1513}
              height={1708}
              priority
              sizes="(min-width: 1024px) 34vw, 90vw"
              className="duotone h-full w-full object-cover object-top"
            />
          </div>
        </figure>
      </Reveal>
    </div>

    {/* --- The one number worth putting up front -------------------- */}
    <Reveal delay={320} className="mt-12 sm:mt-16">
      <dl className="pane inline-flex items-baseline gap-3 px-5 py-4">
        <dt className="sr-only">years since the first line of code</dt>
        <dd className="flex items-baseline gap-3">
          <span className="text-3xl text-phosphor sm:text-4xl">6</span>
          <span className="text-xs text-dim">
            years since the first line of code
          </span>
        </dd>
      </dl>
    </Reveal>

    <Reveal
      delay={380}
      className="mt-10 flex items-center gap-2 text-[11px] text-faint sm:mt-12"
    >
      <LuArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden />
      <span>scroll, or hit</span>
      <kbd className="kbd">⌘</kbd>
      <kbd className="kbd">K</kbd>
    </Reveal>
  </section>
)

export default Boot
