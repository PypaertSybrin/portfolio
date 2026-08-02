import Link from 'next/link'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { LuDownload, LuMail } from 'react-icons/lu'
import SectionHead from '@/components/shell/SectionHead'
import Reveal from '@/components/ui/Reveal'
import { site } from '@/data/SiteData'

const channels = [
  {
    icon: LuMail,
    label: 'email',
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    icon: SiLinkedin,
    label: 'linkedin',
    value: 'in/sybrin-pypaert',
    href: site.linkedin,
    external: true,
  },
  {
    icon: SiGithub,
    label: 'github',
    value: 'PypaertSybrin',
    href: site.github,
    external: true,
  },
  {
    icon: LuDownload,
    label: 'resume',
    value: 'SybrinPypaert-CV.pdf',
    href: site.cv,
    external: false,
  },
]

const Contact = () => (
  <section id="contact" className="pt-24 sm:pt-32">
    <SectionHead command={`mail ${site.handle}`} tag="contact" />

    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
      <Reveal>
        <p className="font-sans text-2xl leading-snug text-fg sm:text-3xl text-balance">
          If you&apos;re building something that would make me learn a new
          thing, I want to hear about it.
        </p>
        <p className="mt-5 max-w-lg font-sans leading-relaxed text-dim text-pretty">
          I&apos;m happily at OnTracx — but I&apos;m always up for talking
          shop, comparing notes on a stack, or hearing about a problem
          that&apos;s genuinely hard.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <ul className="divide-y divide-line border-y border-line">
          {channels.map(channel => {
            const Icon = channel.icon
            return (
              <li key={channel.label}>
                <Link
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noreferrer' : undefined}
                  download={channel.label === 'resume' ? true : undefined}
                  className="group flex items-center gap-4 px-1 py-4 transition-colors hover:bg-raised"
                >
                  <Icon
                    className="h-4 w-4 shrink-0 text-dim transition-colors group-hover:text-phosphor"
                    aria-hidden
                  />
                  <span className="w-20 shrink-0 text-xs text-dim">
                    {channel.label}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm text-fg">
                    {channel.value}
                  </span>
                  <span
                    className="shrink-0 text-xs text-faint transition-all group-hover:translate-x-0.5 group-hover:text-phosphor"
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </div>
  </section>
)

export default Contact
