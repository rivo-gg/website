import { marqueeItems } from '@/data/marquee'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

export function MarqueeWrapper() {
  return (
    <div className="mt-28 w-full">
      <div className="-ml-[2.5%] w-[105%] rotate-6">
        <Marquee
          autoFill
          speed={40}
          className="flex items-center bg-primary/60 py-0.5"
        >
          <span className="ml-1 h-fit text-sm">
            Trusted by 250+ Companies •
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
              key={index}
              className="ml-16 flex items-center"
              title={item.label}
            >
              <item.svg className="h-32 w-32" />
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
