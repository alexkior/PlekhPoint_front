import * as React from 'react';

import { Title as StyledTitle } from './Title.style';

export interface TitleProps {
  event_name?: string;
}

const Title: React.FC<TitleProps> = function Title(props) {
  return (
    <StyledTitle>
      {props.event_name}
    </StyledTitle>
  );
};

export default Title;
