import SectionHead from '@/components/shell/SectionHead'
import Reveal from '@/components/ui/Reveal'
import FeaturedProject from '@/components/work/FeaturedProject'
import WorkIndex from '@/components/work/WorkIndex'
import ProjectsData from '@/data/ProjectsData'

const featured = ProjectsData.filter(project => project.featured)

const Work = () => (
  <section id="work" className="pt-24 sm:pt-32">
    <SectionHead
      command="ls ~/projects"
      tag="work"
      note="the part of the site that actually matters"
    />

    <Reveal>
      <p className="mb-12 max-w-2xl font-sans leading-relaxed text-dim text-pretty">
        Hardware, mobile, backend, web, a bit of AI. Some were briefs, some were
        mine. Every one of them has a line for what I hadn&apos;t done before
        starting it — that&apos;s the honest measure of what a project was
        worth.
      </p>
    </Reveal>

    <Reveal className="mb-4 flex items-baseline gap-2">
      <span className="text-phosphor" aria-hidden>
        ▸
      </span>
      <h3 className="text-sm text-fg">pinned</h3>
      <span className="leader" />
      <span className="label">{featured.length} case studies</span>
    </Reveal>

    <ul className="mb-20 space-y-5 sm:space-y-6">
      {featured.map((project, index) => (
        <FeaturedProject key={project.slug} project={project} index={index} />
      ))}
    </ul>

    <Reveal className="mb-4 flex items-baseline gap-2">
      <span className="text-phosphor" aria-hidden>
        ▸
      </span>
      <h3 className="text-sm text-fg">everything</h3>
      <span className="leader" />
      <span className="label">hover to preview</span>
    </Reveal>

    <Reveal delay={60}>
      <WorkIndex />
    </Reveal>
  </section>
)

export default Work
