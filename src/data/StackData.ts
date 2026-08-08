/**
 * Grouped by the kind of thing being built rather than by how often each one
 * gets used, so the list answers "can he build this" instead of "what does he
 * like". Rendered as a package.json, so the labels read as JSON keys.
 */
export const stackGroups: { label: string; items: string[] }[] = [
  {
    label: 'Frontend Development',
    items: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Next.js'],
  },
  {
    label: 'Backend Development',
    items: ['Azure', 'MySQL', 'MongoDB', 'ASP.NET'],
  },
  {
    label: 'Mobile Development',
    items: ['Flutter', 'Firebase', 'React Native'],
  },
]

export default stackGroups
