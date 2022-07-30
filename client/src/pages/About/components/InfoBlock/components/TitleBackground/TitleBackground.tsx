import * as React from 'react';
import { TitleBackground as StyledTitleBackground } from './TitleBackground.style';

export interface TitleBackgroundProps {

}

const TitleBackground:
  React.FC<TitleBackgroundProps> = function TitleBackground(props) {
    return (
      <StyledTitleBackground />
    );
  };

export default TitleBackground;
