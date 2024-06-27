import { render, screen } from '@testing-library/react';
import FormInput from '../FormInput';

describe('Rendering', () => {
  it('should render correct label text when passed as prop on component load', () => {
    render(<FormInput id="email" label="Label" />);
    const labelEl = screen.getByText('Label');
    expect(labelEl).toBeInTheDocument();
  });

  it('should not render any label when not passed as prop on component load', () => {
    render(<FormInput id="email" />);
    const labelEl = screen.queryByText(/./);
    expect(labelEl).not.toBeInTheDocument();
  });

  it('should render correct placeholder text when passed as prop on component load', () => {
    render(<FormInput id="email" placeholder="Placeholder" />);
    const inputEl = screen.getByPlaceholderText('Placeholder');
    expect(inputEl).toBeInTheDocument();
  });

  it('should render default placeholder text when not passed as prop on component load', () => {
    render(<FormInput id="email" />);
    const inputEl = screen.getByPlaceholderText('Type something here');
    expect(inputEl).toBeInTheDocument();
  });

  it('should not be focusable when disabled', () => {
    render(<FormInput id="email" disabled={true} />);
    const inputEl = screen.getByPlaceholderText('Type something here');
    expect(inputEl).toBeDisabled();
  });

  it('should render correct error text when passed as prop on component load', () => {
    render(<FormInput id="email" error="Error message" />);
    const errorText = screen.getByText('Error message');
    expect(errorText).toBeInTheDocument();
  });

  it('should render the toggle password visibility button when password is passed in props', () => {
    render(
      <FormInput
        id="email"
        password={{ isVisible: false, setIsVisible: () => {} }}
      />,
    );

    const buttoEl = screen.getByRole('button', {
      name: 'Toggle password visibility',
    });

    expect(buttoEl).toBeInTheDocument();
  });

  it('should be of type text when password is not passed in props', () => {
    render(<FormInput id="email" />);

    const inputEl = screen.getByRole('textbox');

    expect(inputEl).toHaveAttribute('type', 'text');
  });

  it('should be of type text when password is passed in props but is not visible', () => {
    render(
      <FormInput
        id="email"
        password={{ isVisible: true, setIsVisible: () => {} }}
      />,
    );

    const inputEl = screen.getByRole('textbox');

    expect(inputEl).toHaveAttribute('type', 'text');
  });

  it('should be of type password when password is passed in props and is visible', () => {
    render(
      <FormInput
        id="email"
        password={{ isVisible: false, setIsVisible: () => {} }}
      />,
    );

    const inputEl = screen.getByPlaceholderText('Type something here');

    expect(inputEl).toHaveAttribute('type', 'password');
  });
});
