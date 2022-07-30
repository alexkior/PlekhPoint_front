import * as React from 'react';
import { Banner as StyledBanner } from './Banner.style';
import { Background } from './components/Background';
import { Title } from './components/Title';

export interface BannerProps {
  event_pic?: string;
  event_name?: string;
}

const Banner:
  React.FC<BannerProps> = function Banner(props) {
    return (
      <StyledBanner>
        <Title event_name={props.event_name} />
        <Background event_pic={props.event_pic} />
      </StyledBanner>
    );
  };

export default Banner;
