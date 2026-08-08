import ProjectPicture from '@/models/ProjectPicture'

/** Broad build categories, used as filter flags in the work index. */
export type ProjectTrack = 'web' | 'mobile' | 'backend' | 'iot' | 'ai'

export interface ProjectLink {
  label: string
  href: string
}

interface Project {
  /** Short hex id. Cosmetic: it makes the index read like a real commit log. */
  hash: string
  name: string
  slug: string
  /** One line, shown in the log row. Keep it under ~60 chars. */
  summary: string
  /** Where it came from: a course, a client, a weekend. */
  context: string
  /** Calendar year the work landed in. Used for sorting and grouping. */
  year: number
  /** Solo, or the size of the team. */
  role: string
  tracks: ProjectTrack[]
  stack: string[]
  /**
   * The thing I had never done before starting this build. The whole point of
   * the site: every row should be able to answer "so what did that teach you".
   */
  firstTime: string
  /** Long-form write-up for the detail page. */
  description: string
  /** What actually got harder/better because of this build. */
  learned: string[]
  featured: boolean
  links?: ProjectLink[]
  pictures: ProjectPicture[]
}

export default Project
