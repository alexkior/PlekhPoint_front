import styled from 'styled-components/macro';

export const Header = styled.header`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: #171938e1;
`;

export const Wrapper = styled.section`
  width: 100%;
  height: 250px;
  max-height: 250px;
`;

export const InnerWrapper = styled.section`
  min-width: 720px;
  width: 60%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 140px 150px;
  justify-items: center;
`;

export const TitleWrapper = styled.section`
  min-width: 720px;
  width: 60%;
  height: 140px;
  max-height: 140px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
