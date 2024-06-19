import admin from '@/public/img/admin.jpg';
import { render, screen } from '@testing-library/react';
import UserPhotoLink from '../UserPhotoLink';

describe('Rendering', () => {
  it('should render the photo after component load', () => {
    render(<UserPhotoLink firstName="Oliwier" photo={admin} />);

    const photoEl = screen.getByAltText('Oliwier photo');

    expect(photoEl).toBeInTheDocument();
  });

  it('should render the user icon after component loads with no user photo in props', () => {
    render(<UserPhotoLink firstName="Oliwier" photo={null} />);

    const iconEl = screen.getByTestId('oliwier-no-photo-icon');

    expect(iconEl).toBeInTheDocument();
  });
});

describe('Functionality', () => {
  it('should redirect to /account subpage after clicking on user photo', () => {
    // Figuring it out soon...
  });
});
