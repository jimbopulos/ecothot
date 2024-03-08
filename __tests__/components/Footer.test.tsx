import { Footer } from '@/components';
import { render, screen } from '@testing-library/react';

describe('component module', () => {
  test('should render', async () => {
    render(<Footer />);

    const component = screen.getByTestId('test-Footer');

    expect(component).toBeInTheDocument();
  });
});
