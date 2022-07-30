import styled from 'styled-components/macro';

export const Button = styled.div`
  cursor: pointer;
  width: 100%;
  background-color: #fff;
  height: 30px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    &:hover{
      opacity: 0.9;
    }
`;

export const ButtonText = styled.p`
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: Helvetica;
  color: #89196A;
  font-size: 0.938rem;
  font-weight: 600;
`;
