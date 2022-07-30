import styled from 'styled-components/macro';

export const Event = styled.div`
  position: relative;
  cursor: pointer;
  height: 450px;
  width: 100%;
  min-width: 250px;
  max-width: 400px;
  background-color: #171938e1;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  width: 80%;
  height: 98%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4fr 2fr 2fr 2fr 3fr 3fr;
  justify-items: start;
  justify-content: start;
  align-items: start;
  align-content: start;
`;
