import { render, screen } from '@testing-library/react';
import ManipulatePasswordVisibilityIcon from '../ManipulatePasswordVisibilityIcon';

describe('Rendering', () => {
  it('should render correct icon if password is visible', () => {
    render(
      <ManipulatePasswordVisibilityIcon
        isVisible={true}
        setVisibility={() => {}}
      />,
    );

    const iconEl = screen.getByTestId('eye-slash');

    expect(iconEl).toBeInTheDocument();
  });
  it('should render correct icon if password is not visible', () => {
    render(
      <ManipulatePasswordVisibilityIcon
        isVisible={false}
        setVisibility={() => {}}
      />,
    );

    const iconEl = screen.getByTestId('eye');

    expect(iconEl).toBeInTheDocument();
  });
});
