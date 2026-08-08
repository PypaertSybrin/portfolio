import Boot from '@/components/sections/Boot'
import Journey from '@/components/sections/Journey'
import Work from '@/components/sections/Work'
import Stack from '@/components/sections/Stack'
import Contact from '@/components/sections/Contact'
import Colophon from '@/components/shell/Colophon'

export default function Home() {
  return (
    <main className="mx-auto max-w-shell px-4 pb-20 sm:px-6">
      <Boot />
      <Journey />
      <Work />
      <Stack />
      <Contact />
      <Colophon />
    </main>
  )
}
