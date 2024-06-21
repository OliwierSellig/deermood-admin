import { render, screen } from '@testing-library/react';
import MainLoadingComponent from '../MainLoadingComponent';

describe('Rendering', () => {
  it('should have the correct text content after component load', () => {
    render(<MainLoadingComponent />);

    const headingEl = screen.getByText('Loading the page');
    const subheadingEl = screen.getByText('Please stay patient...');

    expect(headingEl).toBeInTheDocument();
    expect(subheadingEl).toBeInTheDocument();
  });
});
