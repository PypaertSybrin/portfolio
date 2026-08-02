import Reveal from '@/components/ui/Reveal'

interface SectionHeadProps {
  /** The shell command that names this section. */
  command: string
  /** Right-hand label, e.g. JOURNEY. */
  tag: string
  /** Optional trailing note, rendered as a shell comment. */
  note?: string
}

/**
 * Every section is introduced as a command someone typed. The rule above and
 * the tag on the right give the page a consistent horizon line.
 */
const SectionHead = ({ command, tag, note }: SectionHeadProps) => (
  <Reveal className="mb-10 sm:mb-14">
    <div className="h-px w-full bg-line" />
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 pt-3">
      <span className="text-phosphor select-none" aria-hidden>
        $
      </span>
      <h2 className="text-sm sm:text-base text-fg">{command}</h2>
      {note && (
        <span className="text-xs text-faint hidden md:inline"># {note}</span>
      )}
      <span className="leader" />
      <span className="label">{tag}</span>
    </div>
  </Reveal>
)

export default SectionHead
