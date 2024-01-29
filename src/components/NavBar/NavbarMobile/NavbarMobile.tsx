'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/utils';

export function NavbarMobile() {
  const currentPath = usePathname();

  return (
    <nav className="lg:hidden flex flex-col justify-start">
      {navItems.map(({ id, title, href, isFirstItem, isLastItem }) => {
        const isActive = currentPath === href;

        return (
          <Link
            key={id}
            href={href}
            className={
              isActive
                ? `px-6 py-2 ${!isLastItem && 'mr-7'} text-white bg-zinc-800 ${
                    isFirstItem && 'rounded-l-sm'
                  } ${isLastItem && 'rounded-r-sm'}`
                : `px-6 py-2 ${
                    !isLastItem && 'mr-7'
                  } transition duration-200 hover:text-white hover:bg-zinc-800 ${
                    isFirstItem && 'hover:rounded-l-sm'
                  } ${isLastItem && 'hover:rounded-r-sm'}`
            }
          >
            {title}
          </Link>
        );
      })}
    </nav>
  );
}
