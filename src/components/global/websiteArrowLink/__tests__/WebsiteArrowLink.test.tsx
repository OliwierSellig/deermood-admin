import { render, screen } from '@testing-library/react';
import WebsiteArrowLink from '../WebsiteArrowLink';

describe('Rendering', () => {
  it('should render correcnt link on component load', () => {
    render(<WebsiteArrowLink />);

    const linkEl = screen.getByRole('link', { name: 'Visit Deermood website' });

    expect(linkEl).toBeInTheDocument();
  });
});
