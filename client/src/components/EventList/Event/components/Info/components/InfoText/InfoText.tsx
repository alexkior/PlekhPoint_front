import * as React from 'react';
import { InfoText as StyledInfoText } from './InfoText.style';

export interface InfoTextProps {
  text?: string | undefined;
}

const InfoText:
  React.FC<InfoTextProps> = function InfoText(props) {
    return (
      <StyledInfoText>
        {props.text}
      </StyledInfoText>
    );
  };

export default InfoText;
