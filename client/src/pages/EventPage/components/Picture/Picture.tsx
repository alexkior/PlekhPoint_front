import * as React from 'react';
import { Picture as StyledPicture } from './Picture.style';
import { Background } from './components/Background';

export interface PictureProps {
  event_pic?: string;
}

const Picture:
  React.FC<PictureProps> = function Picture(props) {
    return (
      <StyledPicture>
        <Background event_pic={props.event_pic} />
      </StyledPicture>
    );
  };

export default Picture;
