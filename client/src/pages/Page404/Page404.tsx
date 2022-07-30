import * as React from 'react';
import { Page404 as StyledPage404, TextWrapper, Text } from './Page404.style';

export interface Page404Props {}

const Page404: React.FC<Page404Props> = function Page404(props) {
  return (
    <StyledPage404>
      <iframe
        style={{
          paddingTop: '40px',
          height: '50vh',
          width: '50vw',
          border: '0',
        }}
        src="https://embed.lottiefiles.com/animation/92859"
        title="animation"
      />

      <TextWrapper>
        <Text>
          Страница находится в процессе разработки!
        </Text>
      </TextWrapper>
    </StyledPage404>
  );
};

export default Page404;
