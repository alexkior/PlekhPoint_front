import styled from 'styled-components/macro';

export const DirectionLeader = styled.div`
  padding: 10px 0px 10px 0px;

  height: 210px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  min-width: 120px;
  height: 100%;
  display: grid;
  grid-template-columns: 120px;
  grid-template-rows: auto auto auto;
  column-gap: 20px;
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const TextsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 120px;
  grid-template-rows: auto auto;
  row-gap: 10px;

  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
