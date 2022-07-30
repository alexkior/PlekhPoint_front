import styled from 'styled-components/macro';

export const Footer = styled.div`
  width: 100%;
  height: 200px;
  z-index: 2;
  background-color: #171938e1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Wrapper = styled.footer`
  position: relative;
  margin-top: 80px;
  width: 100%;
  height: 200px;
  justify-self: flex-end;
`;

export const InnerWrapper = styled.div`
  padding-top: 16px;
  width: 60%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const InnerColumn = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
