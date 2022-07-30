import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ParticipantList as StyledParticipantList, InnerWrapper } from './ParticipantList.style';
import { BlockTitle } from './components/BlockTitle';
import { Participant } from './components/Participant';
import { fetchEventParticipantsService } from '../../../../services/fetchEventParticipantsService';
import { getEventParticipants } from '../../../../selectors/getEventParticipants';
import { LoadingStatus } from '../../../../types/api/api';
import { Spinner } from '../../../../components/Spinner';
import { getUserHeaderTitle } from '../../../../helpers/getUserHeaderTitle';

const ParticipantList: React.FC = function ParticipantList(props) {
  const { id } = useParams();
  const event_id = Number(id);

  const dispatch = useDispatch();

  const { eventParticipantsList, loadingStatus } = useSelector(getEventParticipants);

  const renderEventParticipants = eventParticipantsList && loadingStatus === LoadingStatus.READY;

  React.useEffect(() => {
    dispatch(fetchEventParticipantsService({ event_id }));
  }, [event_id, dispatch]);

  return (
    <StyledParticipantList>
      {renderEventParticipants
        ? (
          <>
            <BlockTitle>
              Участники:
            </BlockTitle>

            {
              eventParticipantsList.length
                ? (
                  <InnerWrapper>
                    {eventParticipantsList.map((participant) => (
                      <Participant
                        pictureUrl={participant.photo_url}
                        name={getUserHeaderTitle(
                          participant.participant_name,
                          participant.participant_second_name,
                        )}
                        role={participant.participant_role.role_name}
                      />
                    ))}
                  </InnerWrapper>
                )
                : 'В этом мероприятии еще нет участников, зарегистрируйся первым!'
            }
          </>
        )
        : <Spinner />}

    </StyledParticipantList>
  );
};

export default ParticipantList;
