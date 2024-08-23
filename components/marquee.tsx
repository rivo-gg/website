import { marqueeItems } from '@/data/marquee'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

export function MarqueeWrapper() {
  return (
    <div className="my-28 w-full">
      <div className="relative -ml-[2.5%] w-[105%] rotate-3">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-1/3 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-1/3 bg-gradient-to-l from-background via-background/70 to-transparent" />
        <Marquee
          autoFill
          speed={40}
          className="flex items-center bg-primary py-0.5"
        >
          <span className="ml-1 h-fit text-sm">
            Trusted by Companies All Around The World •
          </span>
        </Marquee>
        <Marquee
          autoFill
          speed={30}
          direction="right"
          className="flex items-center border-y bg-background/5 py-0.5"
        >
          {marqueeItems.map((item, index) => (
            <Link
              href={item.href}
              target="_blank"
              key={index}
              className="ml-16 flex items-center"
              title={item.label}
            >
              <span className="sr-only">{item.label + "'s Company Logo"}</span>
              <item.svg
                alt={item.label + "'s Company Logo"}
                className="pointer-events-none h-32 w-32"
              />
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
