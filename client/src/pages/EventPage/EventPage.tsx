import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { EventPage as StyledEventPage, Wrapper } from './EventPage.style';
import { Banner } from './components/Banner';
import { Picture } from './components/Picture';
import { InfoBlock } from './components/InfoBlock';
import { RoleButtonBlock } from './components/RoleButtonBlock';
import { ParticipantList } from './components/ParticipantList';
import { fetchEventService } from '../../services/fetchEventService';
import { getEventCard } from '../../selectors/getEventCard';
import { LoadingStatus } from '../../types/api/api';
import { fetchEventParticipantsService } from '../../services/fetchEventParticipantsService';
import { regUserOnEventService } from '../../services/regUserOnEventService';
import { getEventParticipants } from '../../selectors/getEventParticipants';
import { regUserService } from '../../services/auth/regUserService';
import { Spinner } from '../../components/Spinner';
import EventPic from '../../assets/img/background.jpg';

const EventPage: React.FC = function EventPage(props) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState<number>(0);

  const { event, loadingStatus } = useSelector(getEventCard);

  const { id } = useParams();
  const event_id = Number(id);

  React.useEffect(() => {
    dispatch(fetchEventService({ event_id }));
  }, [event_id]);

  const isStudentRegistered = event?.is_student_registered;

  const isEndedEvent = event?.is_ended;

  const renderEvent = event && loadingStatus === LoadingStatus.READY;

  return (
    <Wrapper>
      {renderEvent
        ? (
          <StyledEventPage>
            <Banner event_pic={EventPic} event_name={event.event_name} />
            <Picture event_pic={EventPic} />
            <InfoBlock
              event={event}
            />
            <RoleButtonBlock
              radios={event.available_roles || []}
              setChecked={(value) => setChecked(value)}
              checked={checked}
              eventId={event_id}
              isStudentRegistered={Boolean(isStudentRegistered)}
              isEndedEvent={Boolean(isEndedEvent)}
            />
            <ParticipantList />
          </StyledEventPage>
        )
        : <Spinner />}
    </Wrapper>
  );
};

export default EventPage;
