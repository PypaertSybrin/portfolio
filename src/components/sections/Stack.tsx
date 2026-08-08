import SectionHead from '@/components/shell/SectionHead'
import Reveal from '@/components/ui/Reveal'
import { stackGroups } from '@/data/StackData'

/**
 * Deliberately small and deliberately last. The projects above are the
 * argument; this is just the appendix that answers "yes, but which ones".
 */
const Stack = () => (
  <section id="stack" className="pt-24 sm:pt-32">
    <SectionHead
      command="cat package.json"
      title="Tools"
      subtitle="The technologies I've actually shipped with. It's a short list on purpose. The projects above are the real answer."
    />

    <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:gap-12">
      <Reveal>
        <div className="pane overflow-x-auto p-5 text-xs leading-relaxed sm:p-6 sm:text-sm">
          <pre className="whitespace-pre">
            <code>
              <span className="text-faint">{'{'}</span>
              {stackGroups.map((group, groupIndex) => (
                <span key={group.label}>
                  {'\n  '}
                  <span className="text-wire">&quot;{group.label}&quot;</span>
                  <span className="text-faint">: [</span>
                  {group.items.map((item, itemIndex) => (
                    <span key={item}>
                      {'\n    '}
                      <span className="text-fg">&quot;{item}&quot;</span>
                      {itemIndex < group.items.length - 1 && (
                        <span className="text-faint">,</span>
                      )}
                    </span>
                  ))}
                  {'\n  '}
                  <span className="text-faint">]</span>
                  {groupIndex < stackGroups.length - 1 && (
                    <span className="text-faint">,</span>
                  )}
                </span>
              ))}
              {'\n'}
              <span className="text-faint">{'}'}</span>
            </code>
          </pre>
        </div>
      </Reveal>

      <Reveal delay={80} className="flex flex-col justify-center">
        <p className="font-sans leading-relaxed text-dim text-pretty">
          If your stack isn&apos;t on this list, that&apos;s not a problem.
          It&apos;s just the next one.
        </p>
      </Reveal>
    </div>
  </section>
)

export default Stack
