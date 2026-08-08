import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/shell/TopBar'
import StatusBar from '@/components/shell/StatusBar'
import CommandPalette from '@/components/shell/CommandPalette'
import { site } from '@/data/SiteData'

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sybrinpypaert.be'),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description:
    'Full-stack developer at OnTracx. I learn by building. A log of the projects that taught me each stack, from a sensor-wired football goal to a clinical test app.',
  keywords: [
    'Sybrin Pypaert',
    'full-stack developer',
    'OnTracx',
    'Howest',
    'MCT',
    'Belgium',
    'portfolio',
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description:
      'I learn by building. A log of the projects that taught me each stack.',
    url: '/',
    siteName: site.name,
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.role}`,
    description: 'I learn by building.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body className="gridfield min-h-screen pb-7">
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-phosphor focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-phosphor"
        >
          Skip to the work
        </a>
        <TopBar />
        {children}
        <StatusBar />
        <CommandPalette />
      </body>
    </html>
  )
}
