import * as React from 'react';
import { Structure as StyledStructure, InnerWrapper, TextsWrapper } from './Structure.style';
import { StructurePic } from './StructurePic';
import { Title } from './Title';
import { Direction } from './Direction';
import StructureDefaultLogo from '../../../../../assets/img/structureDefault.png';
import { checkImageUrlisValid } from '../../../../../helpers/checkImageUrlisValid';

export interface StructureProps {
  pictureUrl?: string | undefined;
  name?: string;
  stats?: string;
}

const Structure:
  React.FC<StructureProps> = function Structure(props) {
    const { pictureUrl, stats, name } = props;

    const pictureUrlisValid = checkImageUrlisValid(pictureUrl);
    return (
      <StyledStructure>
        <InnerWrapper>
          <StructurePic pic={pictureUrlisValid ? pictureUrl : StructureDefaultLogo} />
          <TextsWrapper>
            <Title>
              {name}
            </Title>
            <Direction>
              {stats}
            </Direction>
          </TextsWrapper>
        </InnerWrapper>
      </StyledStructure>
    );
  };

export default Structure;
