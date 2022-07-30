import styled from 'styled-components/macro';
import background from '../../../../assets/img/background.jpg';

export const Background = styled.div`
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-size: cover;
`;
