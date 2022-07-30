import * as React from 'react';
import { InfoTitle as StyledInfoTitle } from './InfoTitle.style';

export interface InfoTitleProps {
  title?: string | undefined;
}

const InfoTitle:
  React.FC<InfoTitleProps> = function InfoTitle(props) {
    return (
      <StyledInfoTitle>
        {props.title}
      </StyledInfoTitle>
    );
  };

export default InfoTitle;
