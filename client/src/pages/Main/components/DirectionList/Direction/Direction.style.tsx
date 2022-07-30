import styled from 'styled-components/macro';

export const Direction = styled.div`
  padding: 10px 0px 10px 0px;
  background-color: #fff;
  height: 120px;
  width: 100%;

  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: default;
`;

export const InnerWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: 60px auto;
  grid-template-rows: auto;
  column-gap: 10px;
  justify-content: start;
  align-items: center;
  align-content: center;
`;

export const TextsWrapper = styled.div`
  height: 100%;
  width: 180px;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const IconWrapper = styled.div`
  height: 100%;
  width: 60px;
  min-width: 60px;
  max-width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
