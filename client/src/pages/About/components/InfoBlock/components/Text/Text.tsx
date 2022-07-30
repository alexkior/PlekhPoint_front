import * as React from 'react';
import { Text as StyledText, TextWrapper } from './Text.style';

export interface TextProps {
  align?: boolean;
}

const Text:
  React.FC<TextProps> = function Text(props) {
    return (
      <TextWrapper align={props.align}>
        <StyledText>
          {props.children}
        </StyledText>
      </TextWrapper>
    );
  };

export default Text;
