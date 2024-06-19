import { render, screen } from '@testing-library/react';
import LoginFormHeading from '../LoginFormHeading';

describe('Rendering', () => {
  it('should render correct heading and subheading on component load', () => {
    render(
      <LoginFormHeading
        heading="Welcome Back!"
        subheading="Please, provide your credentials below in order to log in."
      />,
    );

    const headingEl = screen.getByRole('heading', { name: 'Welcome Back!' });
    const subheadingEl = screen.getByRole('heading', {
      name: 'Please, provide your credentials below in order to log in.',
    });

    expect(headingEl).toBeInTheDocument();
    expect(subheadingEl).toBeInTheDocument();
  });
});
