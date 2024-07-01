import { render, screen } from '@testing-library/react';
import AdminDetailsRow from '../AdminDetailsRow';

describe('Rendering', () => {
  it('should render correct admin details passed via props', () => {
    render(
      <AdminDetailsRow
        firstName="Oliwier"
        surname="Sellig"
        email="oliwierandrzej.sellig@gmail.com"
      />,
    );

    const fullNameEl = screen.getByText('Oliwier Sellig');
    const emailEl = screen.getByText('oliwierandrzej.sellig@gmail.com');

    expect(fullNameEl).toBeInTheDocument();
    expect(emailEl).toBeInTheDocument();
  });
});
