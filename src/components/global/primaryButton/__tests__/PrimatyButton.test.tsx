import { render, screen } from '@testing-library/react';
import PrimaryButton from '../PrimaryButton';

describe('Rendering', () => {
  it('should render correct text from props on component load', () => {
    render(<PrimaryButton content="Save Changes" />);

    const buttonEl = screen.getByRole('button', { name: 'Save Changes' });

    expect(buttonEl).toBeInTheDocument();
  });
});
