'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// add props for links (objects with href, key, etc.) -- include isFirst/isLast element prop
// map to cleanup and DRY

export function NavbarDesktop() {
  const currentPath = usePathname();
  const isActive = (href: string) => currentPath === href;

  return (
    <nav className="flex flex-row font-semibold text-lg rounded-sm justify-center mt-7 px-18 max-w-screen-xl bg-white shadow-md shadow-gray-800">
      <Link
        href="/"
        className={` px-6 py-2 mr-7 ${
          isActive('/')
            ? 'text-white bg-zinc-800 rounded-l-sm'
            : 'transition duration-200 hover:text-white hover:bg-zinc-800 hover:rounded-l-sm'
        }
            `}
      >
        Welcome
      </Link>
      <Link
        href="https://discord.gg/GSqNxP7D"
        className=" px-6 py-2 mr-7 transition duration-200 hover:text-white hover:bg-zinc-800"
      >
        Discord
      </Link>
      <Link
        href="/shop"
        className={` px-6 py-2 mr-7 ${
          isActive('/shop')
            ? 'text-white bg-zinc-800'
            : 'transition duration-200 hover:text-white hover:bg-zinc-800'
        }
            `}
      >
        Shop
      </Link>
      <Link
        href="/games"
        className={` px-6 py-2 mr-7 ${
          isActive('/games')
            ? 'text-white bg-zinc-800'
            : 'transition duration-200 hover:text-white hover:bg-zinc-800'
        }
            `}
      >
        Games
      </Link>
      <Link
        href="/loyalty"
        className={` px-6 py-2 mr-7 ${
          isActive('/loyalty')
            ? 'text-white bg-zinc-800'
            : 'transition duration-200 hover:text-white hover:bg-zinc-800'
        }
            `}
      >
        Points
      </Link>
      <Link
        href="/forum"
        className={` px-6 py-2 ${
          isActive('/forum')
            ? 'text-white bg-zinc-800 rounded-r-sm'
            : 'transition duration-200 hover:text-white hover:bg-zinc-800 hover:rounded-r-sm'
        }
            `}
      >
        Cybernetic
      </Link>
    </nav>
  );
}
