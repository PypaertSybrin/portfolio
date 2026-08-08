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
      title="Selected work"
      subtitle={`${ProjectsData.length} projects across hardware, mobile, backend, web and AI. Some were briefs, some were mine. Each one says what it was and what it took.`}
    />

    <Reveal className="mb-4 flex items-baseline gap-2">
      <span className="text-phosphor" aria-hidden>
        ▸
      </span>
      <h3 className="font-sans text-lg text-fg">Highlights</h3>
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
      <h3 className="font-sans text-lg text-fg">All projects</h3>
      <span className="leader" />
      <span className="label">hover a row to preview it</span>
    </Reveal>

    <Reveal delay={60}>
      <WorkIndex />
    </Reveal>
  </section>
)

export default Work
