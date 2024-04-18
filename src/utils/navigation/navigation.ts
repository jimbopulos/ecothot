import { DISCORD_LINK } from '../constants';

export interface NavProps {
  id: number;
  title: string;
  href: string;
  // activeSegment: string | null;
  isFirstItem?: boolean;
  isLastItem?: boolean;
}

export const navItems: NavProps[] = [
  {
    id: 1,
    title: 'Welcome',
    href: '/',
    // activeSegment: null,
    isFirstItem: true,
  },
  {
    id: 2,
    title: 'Discord',
    href: DISCORD_LINK,
    // activeSegment: DISCORD_LINK
  },
  {
    id: 3,
    title: 'Shop',
    href: '/shop',
    // activeSegment: 'shop'
  },
  {
    id: 4,
    title: 'Games',
    href: '/games',
    // activeSegment: 'games'
  },
  {
    id: 5,
    title: 'Points',
    href: '/loyalty',
    // activeSegment: 'loyalty'
  },
  {
    id: 6,
    title: 'Cybernetic',
    href: '/forum',
    // activeSegment: 'forum',
    isLastItem: true,
  },
];
