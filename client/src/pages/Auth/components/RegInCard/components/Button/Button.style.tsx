import styled from 'styled-components/macro';

export const Button = styled.button`
  border: 0;
  border-radius: 5px;
  background: linear-gradient( 136deg, rgb(237, 142, 0) 0%, rgb(237, 142, 0) 50%, rgb(208, 38, 160) 100%);

  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: Helvetica;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;

  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    &:hover {
      background: linear-gradient( 136deg, rgb(247, 163, 37) 0%, rgb(241, 157, 31) 50%, rgb(216, 61, 172) 100%);
    }
`;
