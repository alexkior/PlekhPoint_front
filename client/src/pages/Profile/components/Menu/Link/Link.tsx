import * as React from 'react';
import { Link as StyledLink, Wrapper } from './Link.style';

export interface LinkProps {
  onClick?: () => void;
}

const Link:
  React.FC<LinkProps> = function Link(props) {
    return (
      <Wrapper>
        <StyledLink {...props}>
          {props.children}
        </StyledLink>
      </Wrapper>
    );
  };

export default Link;
