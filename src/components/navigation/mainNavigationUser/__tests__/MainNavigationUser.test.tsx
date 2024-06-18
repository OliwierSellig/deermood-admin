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
    const photoEl = screen.getByTestId(`oliwier-photo`);

    expect(nameEl).toBeInTheDocument();
    expect(emailEl).toBeInTheDocument();
    expect(photoEl).toBeInTheDocument();
  });
});

describe('Functionality', () => {
  it('should redirect to /account subpage after clicking on user name', () => {
    // Figuring it out soon...
  });
  it('should redirect to /account subpage after clicking on user photo', () => {
    // Figuring it out soon...
  });
});
