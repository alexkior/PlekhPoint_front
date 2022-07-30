import * as React from 'react';
import { Name as StyledName } from './Name.style';

export interface NameProps {

}

const Name:
  React.FC<NameProps> = function Name(props) {
    return (
      <StyledName>
        {props.children}
      </StyledName>
    );
  };

export default Name;
