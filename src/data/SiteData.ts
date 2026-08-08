export const site = {
  name: 'Sybrin Pypaert',
  handle: 'sybrin',
  role: 'Full-stack Developer',
  company: 'OnTracx',
  companyHref: 'https://www.ontracx.com',
  base: 'Zulte, Belgium',
  email: 'sybrinpypaert@gmail.com',
  github: 'https://github.com/PypaertSybrin',
  linkedin: 'https://www.linkedin.com/in/sybrin-pypaert/',
  cv: '/docs/SybrinPypaert-CV.pdf',
  portrait: 'docs/Home',
} as const

/**
 * Deliberately compact. The site argues through projects, not through a wall
 * of logos — this is here so the question "what has he actually used" has an
 * answer, and nothing more.
 */
export const stackGroups: { label: string; items: string[] }[] = [
  {
    label: 'daily',
    items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node'],
  },
  {
    label: 'also shipped with',
    items: ['Flutter', 'Dart', 'C#', 'ASP.NET', 'Python'],
  },
  {
    label: 'data & infra',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Azure'],
  },
  {
    label: 'closer to the metal',
    items: ['Raspberry Pi', 'Web Bluetooth', 'Sensor pipelines'],
  },
]
