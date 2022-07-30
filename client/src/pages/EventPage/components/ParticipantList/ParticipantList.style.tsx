import styled from 'styled-components/macro';

export const ParticipantList = styled.div`
  width: 100%;
  height: 200px;
  grid-area: participantlist;
`;

export const InnerWrapper = styled.div`
  padding-top: 60px;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 150px;
  grid-auto-rows: auto;
  column-gap: 40px;
  row-gap: 50px;
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: start;
`;
