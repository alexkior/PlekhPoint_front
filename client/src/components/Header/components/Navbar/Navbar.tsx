import * as React from 'react';

import { Navbar as StyledNavbar } from './Navbar.style';

export interface NavbarProps {
  color?: string;
}

const Navbar: React.FC<NavbarProps> = function Navbar(props) {
  return (
    <StyledNavbar {...props} />
  );
};

export default Navbar;
