import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PasswordUpdateForm from '../PasswordUpdateForm';

jest.mock('../../../../actions/updatePassword/updatePassword.ts', () => ({
  updatePassword: jest.fn(),
}));

describe('Functionality', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render correct when new password is too weak', async () => {
    const user = userEvent.setup();
    render(<PasswordUpdateForm />);

    const sumitButtonEl = screen.getByRole('button', {
      name: 'Update Password',
    });

    await user.click(sumitButtonEl);

    const newPasswordErrorEl = screen.getByText(
      'Must contain at least 8 characters',
    );

    expect(newPasswordErrorEl).toBeInTheDocument();
  });
  it('should render correct when passwords dont match', async () => {
    const user = userEvent.setup();
    render(<PasswordUpdateForm />);

    const newPasswordInputEl = screen.getByLabelText('New Password');
    const confirmPasswordInputEl = screen.getByLabelText('Confirm Password');

    const sumitButtonEl = screen.getByRole('button', {
      name: 'Update Password',
    });

    await user.type(newPasswordInputEl, 'newPass1234');
    await user.type(confirmPasswordInputEl, 'newPass123456');

    await user.click(sumitButtonEl);

    const confirmPasswordErrorEl = screen.getByText('Passwords must match');

    expect(confirmPasswordErrorEl).toBeInTheDocument();
  });
});
