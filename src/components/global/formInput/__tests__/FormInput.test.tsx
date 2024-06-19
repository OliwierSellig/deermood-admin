import { render, screen } from '@testing-library/react';
import FormInput from '../FormInput';

describe('Rendering', () => {
  it('should render correct label text when passed as prop on component load', () => {
    render(<FormInput label="Label" />);
    const labelEl = screen.getByText('Label');
    expect(labelEl).toBeInTheDocument();
  });

  it('should not render any label when not passed as prop on component load', () => {
    render(<FormInput />);
    const labelEl = screen.queryByText(/./);
    expect(labelEl).not.toBeInTheDocument();
  });

  it('should render correct placeholder text when passed as prop on component load', () => {
    render(<FormInput placeholder="Placeholder" />);
    const inputEl = screen.getByPlaceholderText('Placeholder');
    expect(inputEl).toBeInTheDocument();
  });

  it('should render default placeholder text when not passed as prop on component load', () => {
    render(<FormInput />);
    const inputEl = screen.getByPlaceholderText('Type something here');
    expect(inputEl).toBeInTheDocument();
  });

  it('should not be focusable when disabled', () => {
    render(<FormInput disabled={true} />);
    const inputEl = screen.getByPlaceholderText('Type something here');
    expect(inputEl).toBeDisabled();
  });

  it('should render correct error text when passed as prop on component load', () => {
    render(
      <FormInput error={{ hasMessage: true, message: 'Error message' }} />,
    );
    const errorText = screen.getByText('Error message');
    expect(errorText).toBeInTheDocument();
  });

  it('should render default error text when not passed as prop on component load', () => {
    render(<FormInput error={{ hasMessage: true }} />);
    const errorText = screen.getByText('Something went wrong.');
    expect(errorText).toBeInTheDocument();
  });
});
