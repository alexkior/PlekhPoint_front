import * as React from 'react';

import { Title as StyledTitle } from './Title.style';

export interface TitleProps {
  height?: string;
}

const Title: React.FC<TitleProps> = function Title(props) {
  return (
    <StyledTitle {...props} />
  );
};

export default Title;
