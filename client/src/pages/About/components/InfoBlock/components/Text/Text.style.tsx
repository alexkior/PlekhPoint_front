import styled from 'styled-components/macro';

export const Text = styled.p`
  height: auto;
  margin: 0;
  padding: 24px 30px 0px 30px;
  text-decoration: none;
  font-family: Helvetica;
  font-size: 1rem;
  font-weight: bold;
  color: #333659;
`;

export const TextWrapper = styled.div<{align:boolean | undefined}>`
  width: 100%;
  height: auto;
  ${(props) => (props.align ? `
  grid-column: 5 / 9;
  ` : `
  grid-column: 1 / 5;
  `)}
  grid-row: 2 / 4;
`;
