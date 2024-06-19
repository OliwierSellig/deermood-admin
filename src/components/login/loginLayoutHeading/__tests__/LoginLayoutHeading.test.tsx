import { render, screen } from '@testing-library/react';
import LoginLayoutHeading from '../LoginLayoutHeading';

describe('Rendering', () => {
  it('should render correnct image and heading after component load', () => {
    render(<LoginLayoutHeading />);

    const imageEl = screen.getByAltText('Deermood logo');
    const textEl = screen.getByText('Deermood');

    expect(imageEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();
  });
});
