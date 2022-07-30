import styled from 'styled-components/macro';

export const BlockTitle = styled.h2`
  margin: 0;
  padding: 0 0 0 10px;
  text-decoration: none;
  font-family: Helvetica;
  color: #1E2033;
  font-size: 1rem;
  font-weight: 600;
  justify-self: baseline;
`;

export const Wrapper = styled.section`
  width: 100%;
  height: 20px;
  margin: 0;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;

  justify-content: start;
  align-items: baseline;
  justify-items: center;
`;
