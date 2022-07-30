import styled, { keyframes } from 'styled-components/macro';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  box-shadow: inset 0px 0px 2px rgba(0,0,0,0);
  border-top: 0.5em solid #ab1e83;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  margin:  0 auto;
  vertical-align: middle;
  animation: ${spin} 0.6s linear infinite;
`;

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
