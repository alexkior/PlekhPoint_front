import * as React from 'react';
import { Spinner as StyledSpinner, Wrapper } from './Spinner.style';

export interface SpinnerProps {

}

const Spinner:
  React.FC<SpinnerProps> = function Spinner(props) {
    return (
      <Wrapper>
        <StyledSpinner />
      </Wrapper>
    );
  };

export default Spinner;
