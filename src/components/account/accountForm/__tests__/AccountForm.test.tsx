import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AccountForm from '../AccountForm';

jest.mock('../../../../actions/updateAdmin/updateAdmin.ts', () => ({
  updateAdmin: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    refresh: jest.fn(),
  }),
}));

describe('Functionality', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render correct placeholder passed via props', () => {
    render(<AccountForm firstName="Oliwier" surname="Sellig" />);

    const firstNameInputEl = screen.getByPlaceholderText('Oliwier');
    const surnameInputEl = screen.getByPlaceholderText('Sellig');

    expect(firstNameInputEl).toBeInTheDocument();
    expect(surnameInputEl).toBeInTheDocument();
  });
  it('should render correct when passwords dont match', async () => {
    const user = userEvent.setup();
    render(<AccountForm firstName="Oliwier" surname="Sellig" />);

    const sumitButtonEl = screen.getByRole('button', {
      name: 'Save Settings',
    });

    await user.click(sumitButtonEl);

    const errorList = screen.getAllByText('This field is required');
    expect(errorList).toHaveLength(2);
  });
});
