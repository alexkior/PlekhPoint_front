import * as React from 'react';
import { BlockTitle as StyledBlockTitle, Wrapper } from './BlockTitle.style';

export interface BlockTitleProps {

}

const BlockTitle: React.FC<BlockTitleProps> = function BlockTitle(props) {
  return (
    <Wrapper>
      <StyledBlockTitle>
        {props.children}
      </StyledBlockTitle>
    </Wrapper>
  );
};

export default BlockTitle;
