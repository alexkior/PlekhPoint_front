import * as React from 'react';
import { Title as StyledTitle } from './Title.style';

export interface TitleProps {

}

const Title: React.FC<TitleProps> = function Title(props) {
  return (
    <StyledTitle>
      {props.children}
    </StyledTitle>
  );
};

export default Title;
