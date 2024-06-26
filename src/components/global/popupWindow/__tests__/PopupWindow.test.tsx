import { render, screen } from '@testing-library/react';
import PopupWindow from '../PopupWindow';

describe('rendering', () => {
  it('should render correct text content and buttons', () => {
    render(
      <PopupWindow
        heading="Are you sure?"
        subheading="Are you sure you awnt to clear all sizes instances? This action cannot be undone."
        actionButton={{ handleClick: () => {}, text: 'Delete', theme: 'red' }}
        closePopup={() => {}}
      />,
    );

    const headingEl = screen.getByText('Are you sure?');
    const subheadingEl = screen.getByText(
      ' Are you sure you awnt to clear all sizes instances? This action cannot be undone.',
    );

    const cancelEl = screen.getByRole('button', { name: 'Cancel' });
    const actionEl = screen.getByRole('button', { name: 'Delete' });

    expect(headingEl).toBeInTheDocument();
    expect(subheadingEl).toBeInTheDocument();
    expect(cancelEl).toBeInTheDocument();
    expect(actionEl).toBeInTheDocument();
  });
});
