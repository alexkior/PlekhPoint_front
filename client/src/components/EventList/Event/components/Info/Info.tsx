import * as React from 'react';
import { Info as StyledInfo } from './Info.style';
import { InfoTitle } from './components/InfoTitle';
import { InfoText } from './components/InfoText';

export interface InfoProps {
  title?: string | undefined;
  text?: string | undefined;
}

const Info:
  React.FC<InfoProps> = function Info(props) {
    return (
      <StyledInfo>
        <InfoTitle title={props.title} />

        <InfoText text={props.text} />
      </StyledInfo>
    );
  };

export default Info;
