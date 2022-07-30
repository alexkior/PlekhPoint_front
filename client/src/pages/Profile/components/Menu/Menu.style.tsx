import styled from 'styled-components/macro';

export const Menu = styled.div`
  grid-row: 1 / 4;
  width: 100%;

  padding-bottom: 40px;

  display: flex;
  flex-direction: column;
  align-items:  flex-start;
  justify-content: flex-start;
`;

export const Wrapper = styled.section`
  width: 100%;
  min-width: 120px;
  height: 100%;
  display: grid;
  grid-template-columns: 120px;
  grid-template-rows: auto;
  column-gap: 20px;
  row-gap: 10px;
  justify-items: start;
  justify-content: start;
  align-items: start;
  align-content: start;
`;

export const LinkListWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0;

  padding: 0;
`;

export const LinkList = styled.ul`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 10px 0px 0px 0px;
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  cursor: pointer;
`;
