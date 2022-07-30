import * as React from 'react';
import { Input as StyledInput, InputLabel, Wrapper } from './Input.style';

export interface InputProps {
  type: string;
  name: string | undefined;
  disabled: boolean;
  placeholder: string;
  value: string | undefined;
  onChange: (event: any) => void;
}

const Input: React.FC<InputProps> = function Input(props) {
  return (
    <Wrapper>
      <StyledInput
        name={props.name}
        type={props.type}
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
      />
      {props.value?.length ? null : (
        <InputLabel htmlFor={props.name}>{props.placeholder}</InputLabel>
      )}
    </Wrapper>
  );
};

export default Input;
