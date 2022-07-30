import * as React from 'react';
import { Picture as StyledPicture } from './Picture.style';

export interface PictureProps {
  picture?: string;
  align?: boolean;
}

const Picture: React.FC<PictureProps> = function Picture(props) {
  return (
    <StyledPicture align={props.align}>
      <img
        style={{
          width: '360px',
        }}
        src={props.picture}
        alt=""
      />
    </StyledPicture>
  );
};

export default Picture;
