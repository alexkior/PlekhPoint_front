import styled from 'styled-components/macro';

export const Icon = styled.div`

`;

export const IconWrapper = styled.div<{align:boolean | undefined}>`
  width: 100px;
  height: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${(props) => (props.align ? `
  grid-column: 8;
  ` : `
  grid-column: 1;
  `)}
  grid-row: 1;
  position: absolute;
  top: 1;
  z-index: 1;
`;
