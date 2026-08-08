# sybrinpypaert.be

Personal portfolio for Sybrin Pypaert, full-stack developer at OnTracx.

The site is built around one argument: **I learn by building.** Everything on
the page is evidence for it. Projects are the main content; the stack list is
an appendix.

## Design

A terminal / build-log identity. Monospace chrome, phosphor-green accent on
near-black, sections introduced as shell commands. Dark only, because a
terminal that turns white is not a terminal.

| Section   | Command                      | Does                                                  |
| --------- | ---------------------------- | ----------------------------------------------------- |
| `whoami`  | `whoami`                     | Hero, intro, portrait, years-coding counter            |
| `journey` | `git log --graph --decorate` | Secondary school → Howest → OnTracx as a commit graph  |
| `work`    | `ls ~/projects`              | 3 pinned case studies, then the full hover-preview log |
| `stack`   | `cat package.json`           | Deliberately small                                     |
| `contact` | `mail sybrin`                | Channels                                               |

Press <kbd>⌘</kbd><kbd>K</kbd> anywhere for the command palette (sections,
every project, outbound links).

## Editing content

All copy lives in `src/data/`. No component edits needed for content changes.

- `ProjectsData.tsx`: the work log. Order is reading order (newest first).
  `featured: true` promotes a project to a pinned case study. `firstTime` is
  the load-bearing field: it feeds the featured cards, the work index preview
  and the callout on every project page, so every project needs a real one.
- `JourneyData.ts`: the three chapters of the commit graph. `projects` holds
  slugs that link back into the work log.
- `SiteData.ts`: name, role, links, and the stack appendix.
- `NavData.ts`: section list for the top bar and the palette.

Project images are Cloudinary public IDs under `docs/` (see
`next.config.mjs` for the cloud name). A project with an empty `pictures`
array renders fine; the index falls back to an ASCII placeholder.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export of every project page
npm run lint
```

Stack: Next.js 15 (App Router), TypeScript, Tailwind CSS, framer-motion-free
CSS transitions, Embla for the project galleries, Cloudinary for images.
