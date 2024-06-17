import { HomeIcon } from '@heroicons/react/24/outline';
import { render, screen } from '@testing-library/react';
import MainNavigationDropdown from '../MainNavigationDropdown';

describe('Rendering', () => {
  it('should render the correct text after page load', () => {
    render(
      <MainNavigationDropdown
        Icon={<HomeIcon />}
        label="Features"
        links={[]}
      />,
    );

    const labelEl = screen.getByRole('button', { name: 'Features' });

    expect(labelEl).toBeInTheDocument();
  });
});

describe('Functionality', () => {
  it('should show child links after clicked', () => {
    render(
      <MainNavigationDropdown
        Icon={<HomeIcon />}
        links={[
          { Icon: HomeIcon, label: 'Themes', url: '/' },
          { Icon: HomeIcon, label: 'Marketing', url: '/' },
        ]}
        label="Features"
      />,
    );
    const linkEl = screen.getByRole('link', { name: 'Themes' });
    expect(linkEl).toBeInTheDocument();
  });
});
