import { HomeIcon } from '@heroicons/react/24/outline';
import { render, screen } from '@testing-library/react';
import MainNavigationLink from '../MainNavigationLink';

describe('Rendering', () => {
  it('should render the correct text and icon after page load', () => {
    render(<MainNavigationLink Icon={HomeIcon} label="Dashboard" url="/" />);

    const iconEl = screen.getByTestId('icon');
    const labelEl = screen.getByText('Dashboard');

    expect(iconEl).toBeInTheDocument();
    expect(iconEl).toContainHTML('<svg');
    expect(labelEl).toBeInTheDocument();
  });
});

describe('Functionality', () => {
  it('should redirect to correct subpage after clicking', () => {
    // Figuring it out soon...
  });
});
