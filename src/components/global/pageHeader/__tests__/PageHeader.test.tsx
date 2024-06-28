import { render, screen } from '@testing-library/react';
import PageHeader from '../PageHeader';

describe('Rendering', () => {
  it('should render correct heading and subheading', () => {
    render(
      <PageHeader
        heading="Account Details"
        subheading="Menage your account details"
      />,
    );

    const headingEl = screen.getByRole('heading', { name: 'Account Details' });
    const subheadingEl = screen.getByRole('heading', {
      name: 'Menage your account details',
    });

    expect(headingEl).toBeInTheDocument();
    expect(subheadingEl).toBeInTheDocument();
  });
  it('should render link with a correct href when passed in props', () => {
    render(
      <PageHeader
        heading="Password Update"
        subheading="Update your current password"
        backLink={{ href: '/account', label: 'Back to account' }}
      />,
    );
    const linkEl = screen.getByRole('link', { name: 'Back to account' });
    expect(linkEl).toBeInTheDocument();
    expect(linkEl).toHaveAttribute('href', '/account');
  });
});
