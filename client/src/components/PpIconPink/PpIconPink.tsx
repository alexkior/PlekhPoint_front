import * as React from 'react';
import { PpIconPink as StyledPpIconPink } from './PpIconPink.style';
import Icon from '../../assets/icons/plekhpoint_logo_pink.svg';

export interface PpIconPinkProps {
  size?: string | undefined;
}

const PpIconPink: React.FC<PpIconPinkProps> = function PpIconPink(props) {
  return (
    <StyledPpIconPink size={props.size}>
      <img
        style={{
          width: `${props.size}`,
        }}
        src={Icon}
        alt=""
      />
    </StyledPpIconPink>
  );
};

export default PpIconPink;
