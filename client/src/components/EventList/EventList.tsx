import * as React from 'react';
import { EventList as StyledEventList } from './EventList.style';
import { Event } from './Event';
import { EventSchema } from '../../schema/ActiveEventsSchema/EventSchema';

export interface EventListProps {
  events: EventSchema[]
}

const EventList: React.FC<EventListProps> = function EventList(props) {
  const { events } = props;

  return (
    <StyledEventList>
      {events.map((event) => (
        <Event event={event} key={event.event_id} />
      ))}
    </StyledEventList>
  );
};

export default EventList;
