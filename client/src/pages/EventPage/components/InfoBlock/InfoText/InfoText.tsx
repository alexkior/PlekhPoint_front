import * as React from 'react';
import { InfoText as StyledInfoText } from './InfoText.style';

const InfoText:
  React.FC = function InfoText(props) {
    return (
      <StyledInfoText>
        {props.children}
      </StyledInfoText>
    );
  };

export default InfoText;
