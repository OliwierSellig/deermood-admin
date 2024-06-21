import { render, screen } from '@testing-library/react';
import PageNotFoundMain from '../PageNotFoundMain';

describe('Rendering', () => {
  it('should render corrent content on component load', () => {
    render(<PageNotFoundMain />);

    const headingEl = screen.getByText('404');

    const subheadingEl = screen.getByText(
      'We couldn’t find the page you were looking for.',
    );

    const linkEl = screen.getByRole('link', { name: 'Back to Login' });

    expect(headingEl).toBeInTheDocument();
    expect(subheadingEl).toBeInTheDocument();
    expect(linkEl).toBeInTheDocument();
  });
});
