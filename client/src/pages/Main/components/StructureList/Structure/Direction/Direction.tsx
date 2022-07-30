import * as React from 'react';
import { Direction as StyledDirection, Wrapper } from './Direction.style';

export interface DirectionProps {

}

const Direction:
  React.FC<DirectionProps> = function Direction(props) {
    return (
      <Wrapper>
        <StyledDirection>
          Мероприятий на платформе: &nbsp;
          {props.children}
        </StyledDirection>
      </Wrapper>
    );
  };

export default Direction;
