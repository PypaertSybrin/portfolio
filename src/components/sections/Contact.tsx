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
    <SectionHead
      command={`mail ${site.handle}`}
      title="Get in touch"
      subtitle="The fastest ways to reach me."
    />

    <Reveal>
      <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
        {channels.map(channel => {
          const Icon = channel.icon
          return (
            <li key={channel.label} className="bg-panel">
              <Link
                href={channel.href}
                target={channel.external ? '_blank' : undefined}
                rel={channel.external ? 'noreferrer' : undefined}
                download={channel.label === 'resume' ? true : undefined}
                className="group flex h-full items-center gap-4 px-5 py-6 transition-colors hover:bg-raised"
              >
                <Icon
                  className="h-5 w-5 shrink-0 text-dim transition-colors group-hover:text-phosphor"
                  aria-hidden
                />
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-dim">
                    {channel.label}
                  </span>
                  <span className="mt-1 block truncate text-sm text-fg">
                    {channel.value}
                  </span>
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
  </section>
)

export default Contact
