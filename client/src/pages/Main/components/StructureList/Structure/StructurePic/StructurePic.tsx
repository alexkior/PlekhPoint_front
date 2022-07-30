import * as React from 'react';
import { StructurePic as StyledStructurePic } from './StructurePic.style';

export interface StructurePicProps {
  pic?: string;
}

const StructurePic: React.FC<StructurePicProps> = function StructurePic(props) {
  return (
    <StyledStructurePic>
      <img
        style={{
          width: '80px',
        }}
        src={props.pic}
        alt=""
      />
    </StyledStructurePic>
  );
};

export default StructurePic;
