import Link from 'next/link';

export function NavBar() {
  return (
    <nav className="flex font-semibold justify-center">
      <ol className="list-none">
        <li className="inline-block mr-1">
          <Link href="/">Welcome</Link> |
        </li>
        <li className="inline-block mr-1">
          <Link href="https://discord.gg/GSqNxP7D">Discord</Link> |
        </li>
        <li className="inline-block mr-1">
          <Link href="/shop">Shop</Link> |
        </li>
        <li className="inline-block mr-1">
          <Link href="/games">Games</Link> |
        </li>
        <li className="inline-block mr-1">
          <Link href="/loyalty">Points</Link> |
        </li>
        <li className="inline-block">
          <Link href="/forum">Cybernetic</Link>
        </li>
      </ol>
    </nav>
  );
}
