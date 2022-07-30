import styled from 'styled-components/macro';

export const RoundChartList = styled.div`
  grid-column: 1 / 3;
  grid-row: 4 / 5;
  cursor: default;
  width: 100%;
  min-width: 720px;
  min-height: 250px;
  display: grid; 
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  align-content: start;
  justify-items: center;
`;
