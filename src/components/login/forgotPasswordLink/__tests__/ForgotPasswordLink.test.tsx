import { render, screen } from '@testing-library/react';
import ForgotPasswordLink from '../ForgotPasswordLink';

describe('Rendering', () => {
  it('should display correct text after component load', () => {
    render(<ForgotPasswordLink />);

    const linkEl = screen.getByRole('link', { name: 'Forgot your password?' });

    expect(linkEl).toBeInTheDocument();
  });
});
