export interface JourneyChapter {
  /** Short hex id, mirrors the project log. */
  hash: string
  /** Git-style refs rendered next to the commit dot. */
  refs: { label: string; tone: 'head' | 'branch' | 'tag' }[]
  date: string
  span: string
  title: string
  org: string
  orgHref?: string
  place: string
  /**
   * The whole chapter, in one or two sentences. Kept deliberately short,
   * because the work log below is where the detail belongs.
   */
  description: string
  /** Slugs from ProjectsData that came out of this chapter. */
  projects: string[]
  current?: boolean
}

/** Newest first, rendered top-down like `git log`. */
export const JourneyData: JourneyChapter[] = [
  {
    hash: 'f0c3d1',
    // Ref labels are picked to read correctly twice: valid-looking git
    // decorations to a developer, plain English to everyone else.
    refs: [{ label: 'HEAD -> now', tone: 'head' }],
    date: '2025-09',
    span: 'Sept 2025 - now',
    title: 'Full-stack Developer',
    org: 'OnTracx',
    orgHref: 'https://www.ontracx.com',
    place: 'Belgium',
    description:
      'Building software that keeps runners from getting injured: a wearable sensor, and the platform that turns its data into something a coach or physio can act on. My first codebase that has to keep working after I stop looking at it.',
    projects: [],
    current: true,
  },
  {
    hash: 'd41b8e',
    refs: [{ label: 'graduated', tone: 'tag' }],
    date: '2022-09',
    span: 'Sept 2022 - June 2025',
    title: 'Multimedia & Creative Technology',
    org: 'Howest',
    orgHref: 'https://www.howest.be/nl',
    place: 'Kortrijk',
    description:
      'Three years taught almost entirely through projects: web, mobile, IoT, backend, AI. Nearly everything in the work log came out of it, and most of it started in a stack I had never touched.',
    projects: [
      'kids-bestest',
      'voice-recipe-assistant',
      'bike-blitz',
      'tasty-trade',
      'formula1-api',
      'target-goal',
      'free-game-galaxy',
      'light-switch',
      'todo-app',
    ],
  },
  {
    hash: '8c02a1',
    refs: [{ label: 'where it started', tone: 'tag' }],
    date: '2020-09',
    span: '2020 - June 2022',
    title: 'IT Management',
    org: 'Sint-Paulusschool, Campus College',
    place: 'Waregem',
    description:
      'Years 5 and 6 of secondary school. Where a computer stopped being something I used and became something I could build with.',
    projects: [],
  },
]

export default JourneyData
