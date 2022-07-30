import { Skeleton } from '@material-ui/lab';
import * as React from 'react';
import { PpIconPink } from '../../../PpIconPink';

import { ProfileScores as StyledProfileScores, Wrapper, IconWrapper } from './ProfileScores.style';

export interface ProfileScoresProps {
  color?: string
  isLoading: boolean;
}

const ProfileScores: React.FC<ProfileScoresProps> = function ProfileScores(props) {
  const { isLoading } = props;
  return (
    <Wrapper>
      {isLoading
        ? <Skeleton width="80%" height="80%" />
        : <StyledProfileScores {...props} />}
      <IconWrapper>
        <PpIconPink size="14px" />
      </IconWrapper>
    </Wrapper>
  );
};

export default ProfileScores;
