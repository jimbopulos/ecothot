'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/utils';
import { useState } from 'react';

export function NavbarMobile() {
  const currentPath = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="lg:hidden flex left-0 absolute w-full font-semibold p-2.5">
      <div
        className={`space-y-2 ml-1.5 mt-1.5 p-2.5 bg-white rounded-md ${
          isNavOpen && 'hidden'
        }`}
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <span className="block h-1 w-8 bg-red-900 rounded-full"></span>
        <span className="block h-1 w-8 bg-red-900 rounded-full"></span>
        <span className="block h-1 w-8 bg-red-900 rounded-full"></span>
      </div>
      <div
        className={
          isNavOpen
            ? 'flex flex-col w-full h-lvh top-0 left-0 z-10 justify-evenly items-center bg-white rounded-sm shadow-md shadow-gray-800'
            : 'hidden'
        }
      >
        <div
          className="absolute top-0 right-0 px-8 py-8"
          onClick={() => setIsNavOpen(false)}
        >
          <svg
            className="h-8 w-8 text-red-900"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        {navItems.map(({ id, title, href, isFirstItem, isLastItem }) => {
          const isActive = currentPath === href;

          return (
            <Link
              key={id}
              href={href}
              className={`${
                isFirstItem && 'mt-4'
              } px-12 py-4 rounded-sm text-3xl sm:w-3/4 min-w-fit text-center ${
                isActive && 'text-white bg-zinc-800'
              }`}
            >
              {title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
