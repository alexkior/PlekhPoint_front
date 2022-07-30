import * as React from 'react';
import { DirectionLeader as StyledDirectionLeader, InnerWrapper, TextsWrapper } from './DirectionLeader.style';
import { UserPic } from './UserPic';
import { Name } from './Name';
import { Direction } from './Direction';
import DefaultUserPic from '../../../../../assets/img/userPic.png';
import { checkImageUrlisValid } from '../../../../../helpers/checkImageUrlisValid';

export interface DirectionLeaderProps {
  pictureUrl?: string | undefined;
  name?: string;
  direction?: string;
}

const DirectionLeader:
  React.FC<DirectionLeaderProps> = function DirectionLeader(props) {
    const { pictureUrl, name, direction } = props;
    const pictureUrlisValid = checkImageUrlisValid(pictureUrl);
    return (
      <StyledDirectionLeader>
        <InnerWrapper>
          <UserPic pic={pictureUrlisValid ? pictureUrl : DefaultUserPic} />
          <TextsWrapper>
            <Name>
              {name}
            </Name>
            <Direction>
              {direction}
            </Direction>
          </TextsWrapper>
        </InnerWrapper>
      </StyledDirectionLeader>
    );
  };

export default DirectionLeader;
