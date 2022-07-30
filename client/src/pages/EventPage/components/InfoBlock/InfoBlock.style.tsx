import styled from 'styled-components/macro';

export const InfoBlock = styled.div`
  width: 100%;
  height: 350px;
  grid-area: infoblock;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr 1fr 3fr;
  column-gap: auto;
  row-gap: auto;
  `;

export const InfoRowWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
