import styled from 'styled-components/macro';

export interface BackgroundProps {
  event_pic?: string;
}

export const Background = styled.div`
  margin: 0;
  top: 0;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 140px;
  background-image: url(${((props: BackgroundProps) => props.event_pic)});
  background-position: center;
  background-size: cover;
`;
