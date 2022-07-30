import * as React from 'react';
import { Text as StyledText } from './Text.style';

export interface TextProps {

}

const Text: React.FC<TextProps> = function Text(props) {
  return (
    <StyledText>
      {props.children}
    </StyledText>
  );
};

export default Text;
