import * as React from 'react';
import { Role as StyledRole, Wrapper } from './Role.style';

export interface RoleProps {

}

const Role:
  React.FC<RoleProps> = function Role(props) {
    return (
      <Wrapper>
        <StyledRole>
          {props.children}
        </StyledRole>
      </Wrapper>
    );
  };

export default Role;
