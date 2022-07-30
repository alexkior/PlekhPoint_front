import * as React from 'react';
import { Title as StyledTitle, TitleWrapper } from './Title.style';

export interface TitleProps {
  align?: boolean;
}

const Title: React.FC<TitleProps> = function Title(props) {
  return (
    <TitleWrapper align={props.align}>
      <StyledTitle align={props.align}>{props.children}</StyledTitle>
    </TitleWrapper>
  );
};

export default Title;
