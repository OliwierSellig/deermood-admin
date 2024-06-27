import { credentialsLogin } from '@/src/actions/actions';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../LoginForm';

jest.mock('../../../../actions/actions.ts', () => ({
  credentialsLogin: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Functionality', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correct error when email and password inputs are empty', async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    const submitButtonEl = screen.getByRole('button', { name: 'Login' });

    await user.click(submitButtonEl);

    const emailErrorEl = screen.getByText('Invalid email');
    const passwordErrorEl = screen.getByText('This field is required');

    expect(emailErrorEl).toBeInTheDocument();
    expect(passwordErrorEl).toBeInTheDocument();
  });

  it('should render correct error when email input is not valid', async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');

    await user.type(emailInput, 'invalid-email');
    await user.type(passwordInput, 'password');

    const submitButtonEl = screen.getByRole('button', { name: 'Login' });
    await userEvent.click(submitButtonEl);

    const emailErrorEl = screen.getByText('Invalid email');
    expect(emailErrorEl).toBeInTheDocument();

    const passwordErrorEl = screen.queryByText('This fields is required');
    expect(passwordErrorEl).not.toBeInTheDocument();
  });

  it('should reset the form inputs after successfull submission', async () => {
    const mockCredentialsLogin = jest.fn().mockResolvedValue({
      status: 'success',
      message: 'Successfully logged in',
    });
    (credentialsLogin as jest.Mock).mockImplementation(mockCredentialsLogin);
    const user = userEvent.setup();

    render(<LoginForm />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    await user.type(emailInput, 'oliwier.sellig@deermood.com');
    await user.type(passwordInput, 'my-password');

    const submitButtonEl = screen.getByRole('button', { name: 'Login' });
    await userEvent.click(submitButtonEl);

    await waitFor(() => {
      expect(emailInput).toHaveValue('');
    });

    await waitFor(() => {
      expect(passwordInput).toHaveValue('');
    });
  });
});
