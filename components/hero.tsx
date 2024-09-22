'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { Barlow } from 'next/font/google'
import Image from 'next/image'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export function Hero() {
  const { theme } = useTheme()
  return (
    <section
      id="hero"
      className="relative mt-52 flex min-h-[60vh] w-full flex-1 justify-center md:min-h-[80vh]"
    >
      <div className="z-10 flex w-auto flex-col gap-12">
        <div className={cn('flex flex-col gap-8', barlow.className)}>
          <div className="text-center text-6xl font-semibold leading-[1.15]">
            <span>The </span>
            <span className="text-primary">Digital </span>
            <span>
              Product Agency <br /> you can{' '}
            </span>
            <span className="text-primary">trust</span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap rounded-lg border bg-background/25 px-8 py-4 text-lg backdrop-blur-xl">
            <span className="text-foreground/50">For</span>
            <span className="rounded-md bg-foreground/5 px-2.5 py-1.5">
              Community Managers
            </span>
            <span className="text-foreground/50">,</span>
            <span className="rounded-md bg-foreground/5 px-2.5 py-1.5">
              Creators
            </span>
            <span className="text-foreground/50">,</span>
            <span className="rounded-md bg-foreground/5 px-2.5 py-1.5">
              Game Developers
            </span>
            <span className="text-foreground/50">and</span>
            <span className="rounded-md bg-foreground/5 px-2.5 py-1.5">
              Entrepreneurs
            </span>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Button variant="outline">Our Work</Button>
          <Button>Contact Us</Button>
        </div>
      </div>
      <Image
        src={theme === 'light' ? '/abstract_white.svg' : '/abstract.svg'}
        alt="Hero Abstract Graph"
        width={9999}
        height={9999}
        className="opacity-100% absolute bottom-0 left-1/2 h-full !w-[1800px] -translate-x-1/2 md:w-10/12"
      />
    </section>
  )
}
