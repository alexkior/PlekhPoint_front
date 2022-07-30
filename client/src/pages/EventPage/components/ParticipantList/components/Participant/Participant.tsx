import * as React from 'react';
import { Participant as StyledParticipant, InnerWrapper, TextsWrapper } from './Participant.style';
import { UserPic } from './components/UserPic';
import { Name } from './components/Name';
import { Role } from './components/Role';
import DefaultUserPic from '../../../../../../assets/img/userPic.png';
import { checkImageUrlisValid } from '../../../../../../helpers/checkImageUrlisValid';

export interface ParticipantProps {
  pictureUrl?: string | undefined;
  name?: string;
  role?: string;
}

const Participant: React.FC<ParticipantProps> = function Participant(props) {
  const { pictureUrl, name, role } = props;

  const pictureUrlisValid = checkImageUrlisValid(pictureUrl);

  return (
    <StyledParticipant>
      <InnerWrapper>
        <UserPic pic={pictureUrlisValid ? pictureUrl : DefaultUserPic} />
        <TextsWrapper>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </TextsWrapper>
      </InnerWrapper>
    </StyledParticipant>
  );
};

export default Participant;
