import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Event as StyledEvent, InnerWrapper } from './Event.style';
import { Background } from './components/Background';
import { Name } from './components/Name';
import { Info } from './components/Info';
import { Button } from './components/Button';
import { directionTypeToDirectionName } from '../../../mappers/directionMapper';
import { getDateFormatedString } from '../../../helpers/getDateFormatedString';
import { EventSchema } from '../../../schema/ActiveEventsSchema/EventSchema';

export interface EventProps {
  event: EventSchema;
}

const Event: React.FC<EventProps> = function Event(props) {
  const { event } = props;
  const { event_id, direction_type, event_date, event_name, org_name, available_roles } = event;

  const navigate = useNavigate();

  const navigateToEventPage = (id: number) => { navigate(`/event/${id}`); };

  const eventRoles = React.useMemo(() => available_roles.map((role) => role.role_name).join(', '), [available_roles]);

  const eventDate = React.useMemo(() => getDateFormatedString(event_date), [event_date]);

  const directionName = React.useMemo(
    () => directionTypeToDirectionName[direction_type],
    [direction_type],
  );

  return (
    <StyledEvent>
      <InnerWrapper>
        <Name eventName={event_name} />
        <Info title="Организатор:" text={org_name} />
        <Info title="Направление:" text={directionName} />
        <Info title="Дата:" text={eventDate} />
        <Info title="Доступные роли:" text={eventRoles} />
        <Button buttonText="ПОДРОБНЕЕ" onClick={() => { navigateToEventPage(event_id); }} />
      </InnerWrapper>
      <Background />
    </StyledEvent>
  );
};

export default Event;
