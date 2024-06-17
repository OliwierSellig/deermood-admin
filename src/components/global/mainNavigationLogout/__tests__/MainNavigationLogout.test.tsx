import { render, screen } from '@testing-library/react';
import MainNavigationLogout from '../MainNavigationLogout';

describe('Rendering', () => {
  it('should render correct content on page load', () => {
    render(<MainNavigationLogout />);

    const logoutEl = screen.getByRole('button', { name: 'Log out' });

    expect(logoutEl).toBeInTheDocument();
  });
});

describe('Functionality', () => {
  it('should open a logout confirmation popup', () => {
    // Will be done in the future
  });
});
