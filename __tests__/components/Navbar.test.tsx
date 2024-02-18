import { Navbar } from '@/components';
import { NavbarMobile } from '@/components/Navbar/NavbarMobile';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe('component module', () => {
  test('should render', async () => {
    render(<Navbar />);

    const component = screen.getByTestId('test-Navbar');

    expect(component).toBeInTheDocument();
  });

  test('should open navigation window when hamburger is clicked', async () => {
    render(<NavbarMobile />);

    const buttonElement = screen.getByRole('button');
    await userEvent.click(buttonElement);
    const component = screen.getByTestId('test-NavbarMobile-open');

    expect(component).toBeInTheDocument();
  });
});
