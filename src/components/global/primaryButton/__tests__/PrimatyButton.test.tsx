import { render, screen } from '@testing-library/react';
import PrimaryButton from '../PrimaryButton';

describe('Rendering', () => {
  it('should render correct text from props on component load', () => {
    render(<PrimaryButton content="Save Changes" />);

    const buttonEl = screen.getByRole('button', { name: 'Save Changes' });

    expect(buttonEl).toBeInTheDocument();
  });

  it('should have correct href and target attributes when set in props to not open in new tab', () => {
    render(<PrimaryButton content="Save Changes" link={{ href: '/login' }} />);

    const buttonEl = screen.getByRole('link', { name: 'Save Changes' });

    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveAttribute('href', '/login');
    expect(buttonEl).toHaveAttribute('target', '_self');
  });

  it('should have correct target attribute when set to open in new tab', () => {
    render(
      <PrimaryButton
        content="Save Changes"
        link={{ href: '/login', newTab: true }}
      />,
    );

    const buttonEl = screen.getByRole('link', { name: 'Save Changes' });

    expect(buttonEl).toHaveAttribute('target', '_blank');
  });
});
