import * as React from 'react';
import { InfoTextBlock as StyledInfoTextBlock } from './InfoTextBlock.style';

export interface InfoTextBlockProps {
  event_description?: string;
}

const InfoTextBlock:
  React.FC<InfoTextBlockProps> = function InfoTextBlock(props) {
    return (
      <StyledInfoTextBlock>
        {props.event_description}
      </StyledInfoTextBlock>
    );
  };

export default InfoTextBlock;
