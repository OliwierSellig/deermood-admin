import { render, screen } from '@testing-library/react';
import BackToLoginLink from '../BackToLoginLink';

describe('Rendering', () => {
  it('should render correct link text after component load', () => {
    render(<BackToLoginLink />);

    const linkEl = screen.getByRole('link', { name: 'Back to Login' });

    expect(linkEl).toBeInTheDocument();
  });
});
