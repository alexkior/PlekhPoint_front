import styled from 'styled-components/macro';
import background from '../../../../assets/img/background.jpg';

export const Background = styled.div`
  margin: 0;
  top: 0;
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 250px;
  background-image: url(${background});
`;
