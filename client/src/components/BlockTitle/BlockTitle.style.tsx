import styled from 'styled-components/macro';

export const BlockTitle = styled.h2`
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: Helvetica;
  color: #1E2033;
  font-size: 1.25rem;
  font-weight: 600;
  justify-self: baseline;
`;

export const Wrapper = styled.section`
  cursor: default;
  width: 100%;
  height: 100px;
  padding-top: 40px;
  margin: 0;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;

  justify-content: center;
  align-items: baseline;
  justify-items: center;
`;
