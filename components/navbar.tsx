'use client'

import { navItems } from '@/data/nav-items'
import { cn } from '@/lib/utils'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import RivoLogo from './rivo-logo'
import { Button } from './ui/button'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 150 ? setIsScrolled(true) : setIsScrolled(false)
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={cn(
        'fixed left-0 top-0 z-[100] flex h-auto w-full items-center justify-center bg-background transition-all duration-300',
        isScrolled ? 'px-6 py-3' : 'p-6'
      )}
    >
      <div className="flex w-full max-w-7xl items-center justify-between gap-4">
        <RivoLogo />
        <div className="flex items-center gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'nav-link relative text-base',
                pathname === item.href && 'active',
                poppins.className
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden h-auto min-w-fit items-center justify-center gap-2 md:flex">
          <button
            className="hover:bg-hover-light flex h-12 w-12 items-center justify-center rounded-xl text-foreground/70 transition hover:text-foreground/90"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ?
              <Moon className="h-6 w-6 sm:h-8 sm:w-8" />
            : <Sun className="h-6 w-6 sm:h-8 sm:w-8" />}
          </button>
          <Button>Contact Us</Button>
        </div>
      </div>
    </nav>
  )
}
