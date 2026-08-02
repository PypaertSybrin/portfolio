import Reveal from '@/components/ui/Reveal'

interface SectionHeadProps {
  /** The shell command that introduces the section. Flavour, not the heading. */
  command: string
  /** Plain-language section title — the thing people actually navigate by. */
  title: string
  /** One line saying what this section is, in plain English. */
  subtitle: string
}

/**
 * A terminal shows the command you typed small and quiet, and its output big.
 * So does this. The command is the prompt line; the title and subtitle are the
 * output. That reads as a shell ritual to a developer and as an ordinary
 * section heading to everyone else, without either being a compromise.
 */
const SectionHead = ({ command, title, subtitle }: SectionHeadProps) => (
  <Reveal className="mb-10 sm:mb-14">
    <div className="h-px w-full bg-line" />

    <div className="flex items-baseline gap-2 pt-3 text-xs">
      <span className="select-none text-phosphor-dim" aria-hidden>
        $
      </span>
      <span className="text-faint">{command}</span>
      <span className="leader" />
    </div>

    <h2 className="mt-4 font-sans text-2xl leading-tight text-fg sm:text-3xl">
      {title}
    </h2>
    <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-dim text-pretty sm:text-base">
      {subtitle}
    </p>
  </Reveal>
)

export default SectionHead
