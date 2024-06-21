import { render, screen } from '@testing-library/react';
import WebsiteArrowLink from '../WebsiteArrowLink';

describe('Rendering', () => {
  it('should render correcnt link on component load', () => {
    render(<WebsiteArrowLink />);

    const linkEl = screen.getByRole('link', { name: 'Visit Deermood website' });

    expect(linkEl).toBeInTheDocument();
  });
  it('should have the correct href attribute and open in a new tab', () => {
    render(<WebsiteArrowLink />);

    const linkEl = screen.getByRole('link', { name: 'Visit Deermood website' });

    expect(linkEl).toHaveAttribute('href', 'https://github.com/OliwierSellig');
    expect(linkEl).toHaveAttribute('target', '_blank');
  });
});
