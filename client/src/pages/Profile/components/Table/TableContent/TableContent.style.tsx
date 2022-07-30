import styled from 'styled-components/macro';

export const TableContent = styled.li`
  width: 96%;
  height: 25px;
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: Helvetica;
  color: #1E2033;;
  font-size: 0.7rem;
  font-weight: 700;

  /* overflow: scroll; */
  text-overflow: ellipsis;

  list-style: none;

`;

export const TableContentWrapper = styled.ul`
  cursor: default;
  width: 100%;
  height: 38px;
  max-height: 40px;

  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  list-style: none;

  &:nth-child(3n-1){
    text-align: center;
  }
  &:nth-child(3n){
    text-align: center;
  }
  &:nth-child(3){
    text-align: left;
  }
  &:nth-child(5){
    text-align: left;
  }
`;
