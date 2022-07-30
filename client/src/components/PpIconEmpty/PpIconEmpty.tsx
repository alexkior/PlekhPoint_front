import * as React from 'react';
import { PpIconEmpty as StyledPpIconEmpty } from './PpIconEmpty.style';
import Icon from '../../assets/icons/plekhpoint_logo_white.svg';

export interface PpIconEmptyProps {
  size?: string | undefined;
}

const PpIconEmpty: React.FC<PpIconEmptyProps> = function PpIconEmpty(props) {
  return (
    <StyledPpIconEmpty size={props.size}>
      <img
        style={{
          width: `${props.size}`,
        }}
        src={Icon}
        alt=""
      />
    </StyledPpIconEmpty>
  );
};

export default PpIconEmpty;
