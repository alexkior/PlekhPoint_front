import styled from 'styled-components/macro';

export interface BackgroundProps {
  event_pic?: string;
}

export const Background = styled.div`
  margin: 0;
  top: 0;
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 350px;
  background-image: url(${((props: BackgroundProps) => props.event_pic)});
  background-position: center;
  background-size: cover;
`;
