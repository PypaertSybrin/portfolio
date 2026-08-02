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
  /** The one-line "why this chapter exists". */
  lede: string
  body: string
  /** Concrete things that happened here. */
  highlights: string[]
  /** Slugs from ProjectsData that came out of this chapter. */
  projects: string[]
  current?: boolean
}

/** Newest first — rendered top-down like `git log`. */
export const JourneyData: JourneyChapter[] = [
  {
    hash: 'f0c3d1',
    // Ref labels are picked to read correctly twice: valid-looking git
    // decorations to a developer, plain English to everyone else.
    refs: [{ label: 'HEAD -> now', tone: 'head' }],
    date: '2025-09',
    span: 'Sept 2025 — now',
    title: 'Full-stack Developer',
    org: 'OnTracx',
    orgHref: 'https://www.ontracx.com',
    place: 'Belgium',
    lede: 'Building software that keeps runners from getting injured.',
    body: 'OnTracx is a Ghent University spin-off making a wearable sensor that measures biomechanical load while you run — lab-grade data, but out on the road. I work across the platform that turns that sensor data into something a runner, a coach or a physio can actually act on. It is the first place where the thing I build has to keep working after I stop looking at it.',
    highlights: [
      'Full-stack work on a real product with real users and real consequences',
      'Sensor data at scale: ingestion, processing, and making it legible',
      'Learning the domain — biomechanics, load management, injury prevention — alongside the code',
      'Shipping into an existing codebase instead of starting from an empty folder',
    ],
    projects: [],
    current: true,
  },
  {
    hash: 'd41b8e',
    refs: [{ label: 'graduated', tone: 'tag' }],
    date: '2022-09',
    span: 'Sept 2022 — June 2025',
    title: 'Multimedia & Creative Technology',
    org: 'Howest',
    orgHref: 'https://www.howest.be/nl',
    place: 'Kortrijk',
    lede: 'Three years of being handed a brief in a language I did not know yet.',
    body: 'MCT is a broad course by design — web, mobile, IoT, backend, AI, design — and it is taught almost entirely through projects. That suited me exactly. Nearly everything in the work index below came out of these three years, and most of them started with a stack I had never touched. I specialised in Next Web Development in the final year.',
    highlights: [
      'Eight projects across web, mobile, embedded hardware and AI',
      'First time in Flutter, C#/.NET, React, Python and Web Bluetooth — each one because a project needed it',
      'Industry Project with Hasselt University, building for practising clinicians',
      'Specialisation in Next Web Development',
    ],
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
    span: '2020 — June 2022',
    title: 'IT Management',
    org: 'Sint-Paulusschool, Campus College',
    place: 'Waregem',
    lede: 'Years 5 and 6 of secondary school. Where the whole thing started.',
    body: 'I picked IT for the last two years of secondary school without really knowing what it meant. It turned out to be the first time a computer was something I could build with rather than just use — networks, systems, the first lines of code. That is where the habit started: get curious about something, then go make it work.',
    highlights: [
      'First real code, first networks, first time taking a machine apart on purpose',
      'Found out that the fastest way for me to understand something is to build it',
      'Graduated June 2022 and went straight into MCT',
    ],
    projects: [],
  },
]

export default JourneyData
