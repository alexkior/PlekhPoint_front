import styled from 'styled-components/macro';

export const ChartBlock = styled.div`
  min-width: 720px;
  width: 60%;

  height: auto;
  padding-top: 40px;
  display: grid;
  grid-template-columns: 3fr 16fr;
  grid-template-rows: 40px 150px 40px 250px;
  row-gap: 20px;
  align-content: start;
  justify-items: start;
`;
