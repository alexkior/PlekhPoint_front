import styled from 'styled-components/macro';
import background from '../../../../../assets/img/background.jpg';

export const Background = styled.div`
  margin: 0;
  bottom: 0;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-size: cover;
  background-image: url(${background});
`;
