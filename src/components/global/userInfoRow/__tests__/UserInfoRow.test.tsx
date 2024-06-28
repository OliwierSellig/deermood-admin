import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { render, screen } from '@testing-library/react';
import UserInfoRow from '../UserInfoRow';

describe('Rendering', () => {
  it('should display correct heading and value', () => {
    render(
      <UserInfoRow
        Icon={<EnvelopeIcon />}
        heading="Email"
        value="oliwier.sellig@gmail.com"
      />,
    );

    const headingEl = screen.getByText('Email');
    const contentEl = screen.getByText('oliwier.sellig@gmail.com');

    expect(headingEl).toBeInTheDocument();
    expect(contentEl).toBeInTheDocument();
  });
});
