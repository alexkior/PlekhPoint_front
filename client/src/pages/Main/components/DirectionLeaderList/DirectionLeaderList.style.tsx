import styled from 'styled-components/macro';

export const DirectionLeaderList = styled.div`
  min-width: 720px;
  padding-bottom: 20px;
  margin: 0;
  width: 60%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 210px;
  column-gap: 20px;
  row-gap: 40px;
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: start;
`;

export const Wrapper = styled.section`
  width: 100vw;
  min-width: 720px;
  min-height: 200px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  justify-content: center;
  align-items: baseline;
  justify-items: center;
`;
