import * as React from 'react';
import { Banner as StyledBanner, BannerWrapper } from './Banner.style';
import { Background } from './components/Background';
import { Title } from './components/Title';

export interface BannerProps {

}

const Banner:
  React.FC<BannerProps> = function Banner(props) {
    return (
      <BannerWrapper>
        <StyledBanner>
          <Title>
            {props.children}
          </Title>
        </StyledBanner>
        <Background />
      </BannerWrapper>
    );
  };

export default Banner;
