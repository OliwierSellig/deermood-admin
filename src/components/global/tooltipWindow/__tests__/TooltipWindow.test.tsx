import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TooltipWindow from '../TooltipWindow';

const tooltipContent = 'This is the tooltip context';
const buttonText = 'Open Deermood';

describe('Rendering', () => {
  it('should not render the tooltip by default', () => {
    render(
      <TooltipWindow content={tooltipContent}>{buttonText}</TooltipWindow>,
    );
    const tooltipEl = screen.queryByText(tooltipContent);

    expect(tooltipEl).not.toBeInTheDocument();
  });
});

describe('Functionality', () => {
  it('should render correct content on mouse hover', async () => {
    render(
      <TooltipWindow content={tooltipContent}>{buttonText}</TooltipWindow>,
    );

    const buttonEl = screen.getByText(buttonText);

    await userEvent.hover(buttonEl);

    const tooltipEl = screen.getByText(tooltipContent);

    expect(tooltipEl).toBeInTheDocument();

    await userEvent.unhover(buttonEl);

    expect(tooltipEl).not.toBeInTheDocument();
  });

  it('should render correct content on mouse focus', () => {
    render(
      <TooltipWindow content={tooltipContent}>{buttonText}</TooltipWindow>,
    );

    const buttonEl = screen.getByText(buttonText);

    fireEvent.focus(buttonEl);

    const tooltipEl = screen.getByText(tooltipContent);

    expect(tooltipEl).toBeInTheDocument();

    fireEvent.blur(buttonEl);

    expect(tooltipEl).not.toBeInTheDocument();
  });
});
