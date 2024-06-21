import { render, screen } from '@testing-library/react';
import ForgotPasswordLink from '../ForgotPasswordLink';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Rendering', () => {
  it('should display correct text have correct href attribute', () => {
    render(<ForgotPasswordLink />);

    const linkEl = screen.getByRole('link', { name: 'Forgot your password?' });

    expect(linkEl).toBeInTheDocument();
    expect(linkEl).toHaveAttribute('href', '/forgot-password');
  });
});
