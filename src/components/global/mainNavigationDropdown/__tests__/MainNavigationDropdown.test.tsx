import { featuresLinks } from '@/src/utils/data/links';
import { HomeIcon } from '@heroicons/react/24/outline';
import { render, screen } from '@testing-library/react';
import MainNavigationLink from '../../mainNavigationLink/MainNavigationLink';
import MainNavigationDropdown from '../MainNavigationDropdown';

describe('Rendering', () => {
  it('should render the correct text after page load', () => {
    render(<MainNavigationDropdown Icon={<HomeIcon />} label="Features" />);

    const labelEl = screen.getByRole('button', { name: 'Features' });

    expect(labelEl).toBeInTheDocument();
  });
});

describe('Functionality', () => {
  it('should show child links after clicked', () => {
    render(
      <MainNavigationDropdown Icon={<HomeIcon />} label="Features">
        {featuresLinks.map((link, i) => (
          <MainNavigationLink
            label={link.label}
            icon={<link.Icon />}
            url={link.url}
            size="sm"
            key={i}
          />
        ))}
      </MainNavigationDropdown>,
    );
    const linkEl = screen.getByRole('link', { name: 'Themes' });
    expect(linkEl).toBeInTheDocument();
  });
});
