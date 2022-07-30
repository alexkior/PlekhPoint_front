import styled from 'styled-components/macro';

export const Title = styled.h3<{ align: boolean | undefined }>`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: Helvetica;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;

  ${(props) => (props.align ? `
  text-align: right;
  ` : `
  text-align: left;
  `)}
`;

export const TitleWrapper = styled.div<{align:boolean | undefined}>`
  width: 100%;
  height: 75px;

  display: flex;
  flex-direction: row;
  align-items: center;

  ${(props) => (props.align ? `
  grid-column: 5 / 8;
  ` : `
  grid-column: 2 / 5;
  `)}
  grid-row: 1;
  position: absolute;
  top: 1;
  z-index: 1;
`;
