import * as React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { NavButton as StyledNavButton } from './NavButton.style';

import { RouteNames } from '../../../../types/route';

export interface NavButtonProps {
  page?: RouteNames;
  color?: string;
  isCurrentLocation?: boolean;
}

const NavButton: React.FC<NavButtonProps> = function NavButton(props) {
  const { page } = props;
  const currentLocation = useLocation();
  const isCurrentLocation = currentLocation.pathname === page;

  const navigate = useNavigate();

  const navigateOnClick = () => (page && navigate(page));

  return (
    <StyledNavButton
      {...props}
      onClick={navigateOnClick}
      isCurrentLocation={isCurrentLocation}
    />
  );
};

export default NavButton;
