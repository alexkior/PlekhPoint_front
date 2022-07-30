import * as React from 'react';
import { Button as StyledButton } from './Button.style';

export interface ButtonProps {
  children: string;
  onClick: () => void;
  disabled: boolean;
}

const Button:
  React.FC<ButtonProps> = function Button(props) {
    return (
      <StyledButton onClick={props.onClick} disabled={props.disabled}>
        {props.children}
      </StyledButton>
    );
  };

export default Button;
