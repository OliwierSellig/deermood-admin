import { render, screen } from '@testing-library/react';
import MainNavigationUser from '../MainNavigationUser';

describe('Render', () => {
  it('should render correct name, email and photo', () => {
    render(
      <MainNavigationUser
        firstName="Oliwier"
        surname="Sellig"
        photo="/"
        email="oliwierandrzej.sellig@gmail.com"
      />,
    );

    const nameEl = screen.getByRole('link', { name: 'Oliwier Sellig' });
    const emailEl = screen.getByText('oliwierandrzej.sellig@gmail.com');

    expect(nameEl).toBeInTheDocument();
    expect(emailEl).toBeInTheDocument();
  });
});

describe('Functionality', () => {
  it('should redirect to /account subpage after clicking on user name', () => {
    // Figuring it out soon...
  });
});
