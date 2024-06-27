import { sendResetPasswordEmail } from '@/src/actions/actions';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ForgotPasswordForm from '../ForgotPasswordForm';

jest.mock('../../../../actions/actions.ts', () => ({
  sendResetPasswordEmail: jest.fn(),
}));

describe('Functionality', () => {
  it('should render correct error when email input is empty', async () => {
    const user = userEvent.setup();
    render(<ForgotPasswordForm />);

    const submitButtonEl = screen.getByRole('button', { name: 'Continue' });

    await user.click(submitButtonEl);

    const emailErrorEl = screen.getByText('Invalid email');

    expect(emailErrorEl).toBeInTheDocument();
  });

  it('should render correct error when email input is not valid', async () => {
    const user = userEvent.setup();
    render(<ForgotPasswordForm />);

    const emailInput = screen.getByLabelText('Email');
    await user.type(emailInput, 'invalid-email');

    const submitButtonEl = screen.getByRole('button', { name: 'Continue' });

    await user.click(submitButtonEl);

    const emailErrorEl = screen.getByText('Invalid email');

    expect(emailErrorEl).toBeInTheDocument();
  });

  it('should reset the form inputs after successfull submission', async () => {
    const mockSendResetPasswordEmail = jest.fn().mockResolvedValue({
      status: 'success',
      message: 'Token sent to email',
    });
    (sendResetPasswordEmail as jest.Mock).mockImplementation(
      mockSendResetPasswordEmail,
    );
    const user = userEvent.setup();

    render(<ForgotPasswordForm />);

    const emailInput = screen.getByLabelText('Email');

    const submitButtonEl = screen.getByRole('button', { name: 'Continue' });

    await user.click(submitButtonEl);

    await waitFor(
      () => {
        expect(emailInput).toHaveValue('');
      },
      { timeout: 4000 },
    );
  });
});
