import {
  BarrierFour,
  Polydor,
  Quataun,
  UniversalMusicGroup
} from '@/icons/brands'

interface MarqueeItem {
  label: string
  href: string
  svg: any
}

export const marqueeItems: MarqueeItem[] = [
  { label: 'Quataun', href: 'https://www.quataun.com/', svg: Quataun },
  { label: 'Barrier Four', href: 'https://barrierfour.us/', svg: BarrierFour },
  {
    label: 'Universal Music Group',
    href: 'https://www.universalmusic.com/',
    svg: UniversalMusicGroup
  },
  { label: 'Polydor', href: 'https://www.polydor.co.uk/', svg: Polydor }
]
