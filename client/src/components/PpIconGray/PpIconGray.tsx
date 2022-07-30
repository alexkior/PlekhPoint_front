import * as React from 'react';
import { PpIconGray as StyledPpIconGray } from './PpIconGray.style';
import Icon from '../../assets/icons/plekhpoint_logo_gray.svg';

export interface PpIconGrayProps {
  size?: string | undefined;
}

const PpIconGray: React.FC<PpIconGrayProps> = function PpIconGray(props) {
  return (
    <StyledPpIconGray size={props.size}>
      <img
        style={{
          width: `${props.size}`,
          opacity: '0.6',
        }}
        src={Icon}
        alt=""
      />
    </StyledPpIconGray>
  );
};

export default PpIconGray;
