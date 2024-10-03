interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Testimonials', href: '/#testimonials' }
  // { label: 'About', href: '/about' },
  // { label: 'Careers', href: '/careers' }
]