import styled from 'styled-components/macro';

export const PpIconGray = styled.div<{size:string | undefined}>`
  width: ${(props) => (props.size || '30px')};
  height: ${(props) => (props.size || '30px')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
