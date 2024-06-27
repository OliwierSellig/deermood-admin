import { resetPassword } from '@/src/actions/resetPassword/resetPassword';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ResetPasswordBox from '../ResetPasswordBox';

jest.mock('../../../../actions/resetPassword/resetPassword.ts', () => ({
  resetPassword: jest.fn(),
}));

describe('Rendering', () => {
  it('should render the success component after successfull form submission', async () => {
    const mockCredentialsResetPassword = jest.fn().mockResolvedValue({
      status: 'success',
      message: 'Password reset successfully!',
    });
    (resetPassword as jest.Mock).mockImplementation(
      mockCredentialsResetPassword,
    );

    const user = userEvent.setup();

    render(<ResetPasswordBox token="token" />);

    const passwordInputEl = screen.getByLabelText('New Password');
    const confirmPasswordInputEl = screen.getByLabelText('Confirm Password');

    const submitButtonEl = screen.getByRole('button', {
      name: 'Reset Password',
    });

    await user.type(passwordInputEl, 'password123');
    await user.type(confirmPasswordInputEl, 'password123');

    await user.click(submitButtonEl);

    await waitFor(() => {
      const successMessageEl = screen.getByText(
        'Your password has been changed',
      );
      expect(successMessageEl).toBeInTheDocument();
    });

    await waitFor(() => {
      const backToLoginButtonEl = screen.getByRole('link', {
        name: 'Back to Login',
      });

      expect(backToLoginButtonEl).toBeInTheDocument();
    });
  });
});
