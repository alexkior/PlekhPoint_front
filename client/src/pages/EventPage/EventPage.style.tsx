import styled from 'styled-components/macro';

export const EventPage = styled.div`
  min-width: 720px;
  padding-top: 40px;
  padding-bottom: 20px;
  margin: 0;
  width: 60%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 140px 350px 160px auto;
  column-gap: 40px;
  row-gap: 50px;
  grid-template-areas:
    "banner banner"
    "picture infoblock"
    "rolebuttonblock rolebuttonblock"
    "participantlist participantlist";
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: start;
`;

export const Wrapper = styled.section`
  width: 100vw;
  min-width: 720px;
  height: 200vh;
  min-height: 200px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  justify-content: center;
  align-items: baseline;
  justify-items: center;
`;
