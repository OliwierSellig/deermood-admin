import { render, screen } from '@testing-library/react';
import MobileNavLogo from '../MobileNavLogo';

describe('Rendering', () => {
  it('should render close button after being opened', () => {
    render(<MobileNavLogo handleClick={() => {}} />);
    const closeButtonEl = screen.getByRole('button', {
      name: 'Close mobile navigation',
    });

    expect(closeButtonEl).toBeInTheDocument();
  });
});

// Should also test the navigation hidin after button click
