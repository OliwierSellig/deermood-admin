import { render, screen } from '@testing-library/react';
import BackToLoginLink from '../BackToLoginLink';

describe('Rendering', () => {
  it('should display correct link text and have correct href attribute', () => {
    render(<BackToLoginLink />);

    const linkEl = screen.getByRole('link', { name: 'Back to Login' });

    expect(linkEl).toBeInTheDocument();
    expect(linkEl).toHaveAttribute('href', '/login');
  });
});
