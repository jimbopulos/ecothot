'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// add props for links (objects with href, key, etc.)
// map to cleanup and DRY

export function NavbarDesktop() {
  const currentPath = usePathname();
  const isActive = (href: string) => currentPath === href;

  return (
    <nav className="flex font-semibold text-lg rounded-sm justify-center shrink mt-7 px-9 max-w-screen-xl bg-white shadow shadow-black">
      <Link
        href="/"
        className={`inline-block px-5 py-2 mr-7 ${
          isActive('/')
            ? 'text-white bg-zinc-800'
            : 'transition duration-300 hover:text-white hover:bg-zinc-800'
        }
            `}
      >
        Welcome
      </Link>
      <Link
        href="https://discord.gg/GSqNxP7D"
        className="inline-block px-5 py-2 mr-7 transition duration-300 hover:text-white hover:bg-zinc-800"
      >
        Discord
      </Link>
      <Link
        href="/shop"
        className={`inline-block px-5 py-2 mr-7 ${
          isActive('/shop')
            ? 'text-white bg-zinc-800'
            : 'transition duration-300 hover:text-white hover:bg-zinc-800'
        }
            `}
      >
        Shop
      </Link>
      <Link
        href="/games"
        className={`inline-block px-5 py-2 mr-7 ${
          isActive('/games')
            ? 'text-white bg-zinc-800'
            : 'transition duration-300 hover:text-white hover:bg-zinc-800'
        }
            `}
      >
        Games
      </Link>
      <Link
        href="/loyalty"
        className={`inline-block px-5 py-2 mr-7 ${
          isActive('/loyalty')
            ? 'text-white bg-zinc-800'
            : 'transition duration-300 hover:text-white hover:bg-zinc-800'
        }
            `}
      >
        Points
      </Link>
      <Link
        href="/forum"
        className={`inline-block px-5 py-2 ${
          isActive('/forum')
            ? 'text-white bg-zinc-800'
            : 'transition duration-300 hover:text-white hover:bg-zinc-800'
        }
            `}
      >
        Cybernetic
      </Link>
    </nav>
  );
}
