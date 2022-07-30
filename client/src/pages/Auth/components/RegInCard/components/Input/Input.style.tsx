import styled from 'styled-components/macro';

export const Input = styled.input`
  background-color: #44444404;
  margin: 0;
  padding: 0;
  border: 0;
  z-index: 2;
  width: 95%;
  height: 100%;
    &::placeholder {
      
    }
`;

export const Wrapper = styled.div`
  position: relative;
  border: 1.2px solid #D3D8E6;
  border-radius: 5px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InputLabel = styled.label`
  width: 95%;
  position: absolute;
  top: 12px;
  left: 10px;
  text-decoration: none;
  font-family: Helvetica;
  color: #b4b4b4a7;
  font-size: 0.85rem;
  font-weight: bold;
`;
