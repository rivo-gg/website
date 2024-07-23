import { Hero } from '@/components/hero'
import { MarqueeWrapper } from '@/components/marquee'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <MarqueeWrapper />
    </main>
  )
}
