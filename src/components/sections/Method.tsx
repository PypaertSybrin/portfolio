import Link from 'next/link'
import SectionHead from '@/components/shell/SectionHead'
import Reveal from '@/components/ui/Reveal'
import ProjectsData from '@/data/ProjectsData'

const pipeline = [
  {
    cmd: 'pick something I can’t build yet',
    note: 'the gap is the point — if I already know how, I learn nothing',
  },
  {
    cmd: 'build it badly, fast, on purpose',
    note: 'a rough thing that runs beats a clean thing that doesn’t exist',
  },
  {
    cmd: 'break it until I understand why',
    note: 'the bug is where the actual lesson is hiding',
  },
  {
    cmd: 'rebuild the part that hurt',
    note: 'now I know the shape of the problem, so the second pass is real',
  },
]

/** Every distinct technology that shows up across the work. */
const distinctStack = new Set(ProjectsData.flatMap(project => project.stack))

const counters = [
  { value: String(ProjectsData.length), label: 'projects shipped' },
  { value: String(distinctStack.size), label: 'technologies used in anger' },
  { value: '6', label: 'years since the first line' },
]

const Method = () => (
  <section id="method" className="pt-24 sm:pt-32">
    <SectionHead
      command="cat ~/method.md"
      tag="how i work"
      note="the short version"
    />

    {/* --- The thesis --------------------------------------------------- */}
    <Reveal>
      <blockquote className="max-w-4xl">
        <p className="font-sans text-2xl leading-snug text-fg sm:text-4xl sm:leading-[1.22] text-balance">
          I don&apos;t learn a language and then go looking for a project.
        </p>
        <p className="mt-3 font-sans text-2xl leading-snug text-phosphor sm:text-4xl sm:leading-[1.22] text-balance">
          I find a project and let it teach me the language.
        </p>
      </blockquote>
    </Reveal>

    <Reveal delay={100}>
      <p className="mt-8 max-w-2xl font-sans leading-relaxed text-dim text-pretty">
        Every stack I know arrived the same way: something I wanted to build
        needed it. Flutter came from a recipe app. C# came from an API that had
        to be correct, not just working. Python and GPIO came from a football
        goal wired to a Raspberry Pi. Reading the docs first has never once
        worked for me — building the wrong version first always has.
      </p>
    </Reveal>

    {/* --- The loop, as a shell pipeline -------------------------------- */}
    <Reveal delay={140} className="mt-14">
      <div className="pane p-5 sm:p-7">
        <p className="label mb-5">the loop</p>
        <ol className="space-y-4">
          {pipeline.map((step, index) => (
            <li key={step.cmd} className="flex flex-wrap items-baseline gap-x-3">
              <span
                className="w-4 shrink-0 select-none text-right text-phosphor-dim"
                aria-hidden
              >
                {index === 0 ? '' : '|'}
              </span>
              <span className="text-sm text-fg sm:text-base">{step.cmd}</span>
              <span className="leader hidden sm:block" />
              <span className="w-full pl-7 font-sans text-xs text-faint sm:w-auto sm:max-w-[22rem] sm:pl-0 sm:text-right">
                {step.note}
              </span>
            </li>
          ))}
          <li className="flex items-baseline gap-x-3 border-t border-line pt-4">
            <span className="w-4 shrink-0 select-none text-right text-phosphor" aria-hidden>
              &gt;
            </span>
            <span className="text-sm text-phosphor sm:text-base">
              something I can actually do now
            </span>
          </li>
        </ol>
      </div>
    </Reveal>

    {/* --- The receipts ------------------------------------------------- */}
    <Reveal delay={180} className="mt-6">
      <div className="pane">
        <div className="flex flex-wrap items-baseline gap-x-2 border-b border-line px-5 py-3 text-xs sm:text-sm">
          <span className="text-phosphor select-none" aria-hidden>
            $
          </span>
          <span className="text-dim">grep -rn</span>
          <span className="text-signal">&quot;first time&quot;</span>
          <span className="text-dim">~/projects</span>
          <span className="leader" />
          <span className="label">{ProjectsData.length} matches</span>
        </div>

        <ul className="divide-y divide-line/60">
          {ProjectsData.map(project => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex flex-col gap-1 px-5 py-3 transition-colors hover:bg-raised sm:flex-row sm:items-baseline sm:gap-3"
              >
                <span className="shrink-0 text-xs text-wire sm:w-56 sm:truncate">
                  projects/{project.slug}
                </span>
                <span className="hidden text-faint sm:inline" aria-hidden>
                  :
                </span>
                <span className="font-sans text-sm text-dim transition-colors group-hover:text-fg text-pretty">
                  {project.firstTime}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>

    {/* --- Counters ----------------------------------------------------- */}
    <Reveal delay={220} className="mt-6">
      <dl className="grid gap-px border border-line bg-line sm:grid-cols-3">
        {counters.map(counter => (
          <div key={counter.label} className="bg-panel px-5 py-6">
            <dt className="sr-only">{counter.label}</dt>
            <dd>
              <span className="block text-3xl text-phosphor sm:text-4xl">
                {counter.value}
              </span>
              <span className="mt-1 block text-xs text-dim">
                {counter.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>
  </section>
)

export default Method
