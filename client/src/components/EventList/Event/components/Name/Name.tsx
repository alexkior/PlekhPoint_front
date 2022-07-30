import * as React from 'react';
import { Name as StyledName } from './Name.style';

export interface NameProps {
  eventName?: string | undefined;
}

const Name:
  React.FC<NameProps> = function Name(props) {
    return (
      <StyledName>
        {props.eventName}
      </StyledName>
    );
  };

export default Name;
