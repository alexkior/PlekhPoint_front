import * as React from 'react';
import { Button as StyledButton, ButtonText } from './Button.style';

export interface ButtonProps {
  buttonText?: string;
  onClick: () => void
}

const Button: React.FC<ButtonProps> = function Button(props) {
  return (
    <StyledButton {...props}>
      <ButtonText>
        {props.buttonText}
      </ButtonText>
    </StyledButton>
  );
};

export default Button;
