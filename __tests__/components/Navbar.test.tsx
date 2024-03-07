import { Navbar } from '@/components';
import { NavbarDesktop } from '@/components/Navbar/NavbarDesktop';
import { NavbarMobile } from '@/components/Navbar/NavbarMobile';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe('component module', () => {
  test('should render', async () => {
    render(<Navbar />);

    const component = screen.getByTestId('test-Navbar');

    expect(component).toBeInTheDocument();
  });

  test('should render in Desktop view', async () => {
    render(<NavbarDesktop />);

    const component = screen.getByTestId('test-NavbarDesktop');

    expect(component).toBeInTheDocument();
  });

  test('should open navigation window when hamburger is clicked in Mobile view', async () => {
    render(<NavbarMobile />);

    const buttonElement = screen.getByRole('button');
    await userEvent.click(buttonElement);
    const component = screen.getByTestId('test-NavbarMobile-open');

    expect(component).toBeInTheDocument();
  });
});
