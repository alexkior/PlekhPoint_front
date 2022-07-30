import styled from 'styled-components/macro';

export const Link = styled.p`
  width: 100%;
  margin: 0;
  padding: 5px 0px 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  font-family: Helvetica;
  color: #89196A;
  font-size: 0.875rem;
  font-weight: bold;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
    &:hover{
      background-color: #D17E00;
      color: #fff;
    }
    &:active{
      background-color: #D17E00;
      color: #fff;
    }
`;

export const Wrapper = styled.li`
  padding-top: 8px;
  width: 100%;
  height: 40px;
`;
