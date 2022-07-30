import styled from 'styled-components/macro';

export const RegInCard = styled.div`
  padding: 40px 20px 40px 20px;
  min-width: 300px;
  width: 20%;
  min-height: 540px;
  height: 50%;

  background-color: #fff;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 10px 1fr 1fr;
  row-gap: 20px;

  border-radius: 7px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
