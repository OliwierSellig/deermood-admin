import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ResetPasswordForm from '../ResetPasswordForm';

jest.mock('../../../../actions/actions.ts', () => ({
  credentialsLogin: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Functionality', () => {
  it('should render correct errors whne password and confirmPassword are empty', async () => {
    const user = userEvent.setup();
    render(<ResetPasswordForm token="token" setSucces={() => {}} />);

    const submitButtonEl = screen.getByRole('button', {
      name: 'Reset Password',
    });

    await user.click(submitButtonEl);

    const passwordErrorEl = screen.getByText(
      'Must contain at least 8 characters',
    );
    const confirmPasswordlErrorEl = screen.getByText('This field is required');

    expect(passwordErrorEl).toBeInTheDocument();
    expect(confirmPasswordlErrorEl).toBeInTheDocument();
  });

  it('should render correct error when password is too weak', async () => {
    const user = userEvent.setup();
    render(<ResetPasswordForm token="token" setSucces={() => {}} />);

    const passwordInputEl = screen.getByLabelText('New Password');

    const submitButtonEl = screen.getByRole('button', {
      name: 'Reset Password',
    });

    await user.type(passwordInputEl, 'pass');

    await user.click(submitButtonEl);

    const passwordErrorEl = screen.getByText(
      'Must contain at least 8 characters',
    );

    expect(passwordErrorEl).toBeInTheDocument();
  });

  it('should render correct error when passwords do not match', async () => {
    const user = userEvent.setup();
    render(<ResetPasswordForm token="token" setSucces={() => {}} />);

    const passwordInputEl = screen.getByLabelText('New Password');
    const confirmPasswordInputEl = screen.getByLabelText('Confirm Password');

    const submitButtonEl = screen.getByRole('button', {
      name: 'Reset Password',
    });

    await user.type(passwordInputEl, 'password123');
    await user.type(confirmPasswordInputEl, 'password');

    await user.click(submitButtonEl);

    const passwordErrorEl = screen.queryByText(
      'Must contain at least 8 characters',
    );

    const confirmPasswordErrorEl = screen.getByText('Passwords must match');

    expect(passwordErrorEl).not.toBeInTheDocument();
    expect(confirmPasswordErrorEl).toBeInTheDocument();
  });
});
