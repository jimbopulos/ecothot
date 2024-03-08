import { NavbarDesktop } from './NavbarDesktop';
import { NavbarMobile } from './NavbarMobile';

export function Navbar() {
  return (
    <div data-testid="test-Navbar">
      <NavbarDesktop />
      <NavbarMobile />
    </div>
  );
}
