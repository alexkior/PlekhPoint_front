import * as React from 'react';
import { Icon as StyledIcon, IconWrapper } from './Icon.style';

export interface IconProps {
  icon?: string;
  align?: boolean;
}

const Icon: React.FC<IconProps> = function Icon(props) {
  return (
    <IconWrapper align={props.align}>
      <StyledIcon>
        <img
          style={{
            width: '40px',
          }}
          src={props.icon}
          alt=""
        />
      </StyledIcon>
    </IconWrapper>
  );
};

export default Icon;
