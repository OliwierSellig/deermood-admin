import { HomeIcon } from '@heroicons/react/24/outline';
import { render, screen } from '@testing-library/react';
import MainNavigationLink from '../MainNavigationLink';

describe('Rendering', () => {
  it('should render the correct text after page load', () => {
    render(
      <MainNavigationLink icon={<HomeIcon />} label="Dashboard" url="/" />,
    );

    const labelEl = screen.getByRole('link', { name: 'Dashboard' });

    expect(labelEl).toBeInTheDocument();
  });
});

describe('Functionality', () => {
  it('should redirect to correct subpage after clicking', () => {
    // Figuring it out soon...
  });
});
