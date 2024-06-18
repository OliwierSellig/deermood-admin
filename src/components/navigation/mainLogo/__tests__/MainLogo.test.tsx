import { render, screen } from '@testing-library/react';
import MainLogo from '../MainLogo';

describe('Rendering', () => {
  it('should render company heading and subheading after page loads', () => {
    render(<MainLogo />);
    const headingEl = screen.getByText('Deermood');
    const subheadingEl = screen.getByText('Admin Panel');

    expect(headingEl).toBeInTheDocument();
    expect(subheadingEl).toBeInTheDocument();
  });
});

describe('Functionality', () => {
  it('should open a deermood e-commerce page in a new tab after clicking arrow link', () => {
    // Figuring it out soon...
  });
});
