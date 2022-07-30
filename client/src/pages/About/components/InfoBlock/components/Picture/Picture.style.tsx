import styled from 'styled-components/macro';

export const Picture = styled.div<{align:boolean | undefined}>`
  width: 100%;
  height: auto;
  ${(props) => (props.align ? `
  grid-column: 1 / 5;
  ` : `
  grid-column: 5 / 9;
  `)}
  grid-row: 1 / 4;
`;
