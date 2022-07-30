import styled from 'styled-components/macro';

export const EventList = styled.div`
  padding-top: 10px;
  padding-bottom: 40px;
  width: 100%;
  max-width: 860px;
  min-height: 250px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 450px;
  column-gap: 60px;
  row-gap: 80px;
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: start;

  grid-area: 'right-part';
`;
