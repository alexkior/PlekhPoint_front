import * as React from 'react';

import { Background as StyledBackground } from './Background.style';

export interface BackgroundProps {
  event_pic?: string;
}

const Background: React.FC<BackgroundProps> = function Background(props) {
  return (
    <StyledBackground {...props} />
  );
};

export default Background;
