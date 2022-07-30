import * as React from 'react';
import { InfoTitle as StyledInfoTitle } from './InfoTitle.style';

export interface InfoTitleProps {

}

const InfoTitle:
  React.FC<InfoTitleProps> = function InfoTitle(props) {
    return (
      <StyledInfoTitle>
        {props.children}
      </StyledInfoTitle>
    );
  };

export default InfoTitle;
