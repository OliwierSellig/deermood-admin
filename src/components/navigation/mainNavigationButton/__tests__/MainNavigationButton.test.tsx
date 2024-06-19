import { UserIcon } from '@heroicons/react/24/outline';
import { render, screen } from '@testing-library/react';
import MainNavigationButton from '../MainNavigationButton';

describe('Rendering', () => {
  it('Souhld render correct text after component loads', () => {
    render(<MainNavigationButton icon={<UserIcon />} label="Click here" />);

    const buttonEl = screen.getByRole('button', { name: 'Click here' });

    expect(buttonEl).toBeInTheDocument();
  });
});
