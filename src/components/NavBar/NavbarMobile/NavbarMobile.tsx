'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/utils';
import { useState } from 'react';

export function NavbarMobile() {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <nav className="lg:hidden flex flex-col absolute w-full left-0 font-semibold p-2.5">
      <button
        onClick={handleClick}
        className={
          'flex flex-col absolute justify-center items-center p-2.5 transition-all duration-300 ease-out bg-white rounded-md'
        }
      >
        <span
          className={`block h-1 w-7 bg-red-900 transition-all duration-300 ease-out rounded-full ${
            isOpen ? 'rotate-45 translate-y-2' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`block h-1 w-7 bg-red-900 transition-all duration-300 ease-out rounded-full my-1 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`block h-1 w-7 bg-red-900 transition-all duration-300 ease-out rounded-full ${
            isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      {isOpen ? (
        <div className="flex flex-col w-full h-lvh justify-evenly items-center bg-white rounded-sm shadow-md shadow-gray-800 transition-all duration-300 ease-out">
          {navItems.map(({ id, title, href }) => {
            const isActive = currentPath === href;

            return (
              <Link
                key={id}
                href={href}
                className={`px-12 py-4 rounded-sm shadow-lg shadow-gray-800 text-3xl w-3/5 min-w-fit text-center ${
                  isActive && 'text-white bg-zinc-800'
                }`}
              >
                {title}
              </Link>
            );
          })}
        </div>
      ) : (
        // <div
        //   className={`transition-all duration-300 ease-out ${
        //     isOpen
        //       ? 'flex flex-col w-full h-lvh left-0 z-10 justify-evenly items-center bg-white rounded-sm shadow-md shadow-gray-800'
        //       : 'hidden'
        //   }
        //   `}
        // >
        //   {/* <div className="absolute top-0 right-0 px-8 py-8" onClick={handleClick}>
        //   <svg
        //     className="h-8 w-8 text-red-900"
        //     viewBox="0 0 24 24"
        //     fill="none"
        //     stroke="currentColor"
        //     strokeWidth="2"
        //     strokeLinecap="round"
        //     strokeLinejoin="round"
        //   >
        //     <line x1="18" y1="6" x2="6" y2="18" />
        //     <line x1="6" y1="6" x2="18" y2="18" />
        //   </svg>
        // </div> */}
        //   {navItems.map(({ id, title, href, isFirstItem, isLastItem }) => {
        //     const isActive = currentPath === href;

        //     return (
        //       <Link
        //         key={id}
        //         href={href}
        //         className={`${
        //           isFirstItem && 'mt-4'
        //         } px-12 py-4 rounded-sm text-3xl sm:w-3/4 min-w-fit text-center ${
        //           isActive && 'text-white bg-zinc-800'
        //         }`}
        //       >
        //         {title}
        //       </Link>
        //     );
        //   })}
        // </div>
        ''
      )}
    </nav>
  );
}
