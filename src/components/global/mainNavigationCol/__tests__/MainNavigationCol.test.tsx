import { render, screen } from '@testing-library/react';
import MainNavigationCol from '../MainNavigationCol';

describe('Rendering', () => {
  it('should render correct navigation column title after page load', () => {
    render(<MainNavigationCol title="Main menu" />);

    const titleEl = screen.getByText('Main menu');

    expect(titleEl).toBeInTheDocument();
  });
});
