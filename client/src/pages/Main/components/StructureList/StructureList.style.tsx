import styled from 'styled-components/macro';

export const StructureList = styled.div`
  width: 100%;
  min-width: 720px;
  padding: 20px 0px 20px 0px;
  margin: 0;
  width: 60%;
  height: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 40px;
  row-gap: 30px;
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
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
