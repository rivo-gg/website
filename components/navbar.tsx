'use client'

import { navItems } from '@/data/nav-items'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import RivoLogo from './rivo-logo'
import { Button } from './ui/button'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="fixed left-0 top-0 flex h-auto w-full items-center justify-center bg-background p-6">
      <div className="flex w-full max-w-7xl items-center justify-between gap-4">
        <RivoLogo />
        <div className="flex items-center gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn('group relative text-base', poppins.className)}
            >
              <span
                className={cn(
                  'absolute bottom-0.5 h-0.5 rounded bg-primary transition-all duration-300 group-hover:w-full',
                  pathname === item.href ?
                    'left-0 w-1/2'
                  : 'right-0 w-0 group-hover:left-0'
                )}
              ></span>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-2">
          <Button>Contact Us</Button>
        </div>
      </div>
    </nav>
  )
}
