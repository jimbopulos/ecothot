'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment, usePathname } from 'next/navigation';
import { navItems } from '@/utils';

export function NavbarDesktop() {
  const currentPath = usePathname();
  // const segment = useSelectedLayoutSegment();

  return (
    <nav
      className="hidden lg:flex flex-row font-semibold text-lg rounded-sm justify-center mt-7 px-18 max-w-screen-xl bg-white shadow-md shadow-gray-800"
      data-testid="test-NavbarDesktop"
    >
      {navItems.map(({ id, title, href, isFirstItem, isLastItem }) => {
        const isActive = currentPath === href;

        return (
          <Link
            key={id}
            href={href}
            className={
              isActive
                ? `px-6 py-2 text-white bg-zinc-800 transition-all duration-300 ease-out ${
                    !isLastItem && 'mr-7'
                  } ${isFirstItem && 'rounded-l-sm'} ${
                    isLastItem && 'rounded-r-sm'
                  }`
                : `px-6 py-2 transition-all duration-300 ease-out hover:text-white hover:bg-zinc-800  ${
                    !isLastItem && 'mr-7'
                  } ${isFirstItem && 'hover:rounded-l-sm'} ${
                    isLastItem && 'hover:rounded-r-sm'
                  }`
            }
          >
            {title}
          </Link>
        );
      })}
    </nav>
  );
}
