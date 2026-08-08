export interface NavItem {
  id: string
  label: string
  hint: string
}

export const navItems: NavItem[] = [
  { id: 'whoami', label: 'whoami', hint: 'Who I am' },
  { id: 'journey', label: 'journey', hint: 'School to OnTracx' },
  { id: 'work', label: 'work', hint: 'Every project' },
  { id: 'contact', label: 'contact', hint: 'Get in touch' },
]

/** Fired by the top bar, listened for by the command palette. */
export const OPEN_PALETTE_EVENT = 'sp:open-palette'
