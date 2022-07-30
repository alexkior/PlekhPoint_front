import styled from 'styled-components/macro';

export const RegEventButton = styled.button.attrs({
  type: 'submit',
})`
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  background: linear-gradient( 136deg, rgb(237, 142, 0) 0%, rgb(237, 142, 0) 50%, rgb(208, 38, 160) 100%);
  height: 40px;
  border-radius: 5px;
  border: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: button;
    &:hover{
      opacity: 0.9;
    }
`;

export const ButtonText = styled.p`
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: Helvetica;
  color: #fff;
  font-size: 0.938rem;
  font-weight: 600;
`;
