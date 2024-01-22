import Link from 'next/link';

export function NavbarDesktop() {
  return (
    <nav className="flex font-semibold text-lg rounded-sm justify-center shrink mt-7 px-7 max-w-screen-xl bg-white shadow shadow-black">
      <ul className="list-none">
        <li className="inline-block px-5 py-2 mr-7 transition duration-300 hover:text-white hover:bg-zinc-800">
          <Link href="/">Welcome</Link>
        </li>
        <li className="inline-block px-5 py-2 mr-7 transition duration-300 hover:text-white hover:bg-zinc-800">
          <Link href="https://discord.gg/GSqNxP7D">Discord</Link>
        </li>
        <li className="inline-block px-5 py-2 mr-7 transition duration-300 hover:text-white hover:bg-zinc-800">
          <Link href="/shop">Shop</Link>
        </li>
        <li className="inline-block px-5 py-2 mr-7 transition duration-300 hover:text-white hover:bg-zinc-800">
          <Link href="/games">Games</Link>
        </li>
        <li className="inline-block px-5 py-2 mr-7 transition duration-300 hover:text-white hover:bg-zinc-800">
          <Link href="/loyalty">Points</Link>
        </li>
        <li className="inline-block px-5 py-2 transition duration-300 hover:text-white hover:bg-zinc-800">
          <Link href="/forum">Cybernetic</Link>
        </li>
      </ul>
    </nav>
  );
}
