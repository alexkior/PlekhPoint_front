import { EventRole } from '../ActiveEventsSchema/EventSchema';
import { DirectionType } from '../DirectionsSchema/DirectionsSchema';

export interface EventPageSchema {
  event_id?: number;
  org_name?: string;
  event_name?: string;
  event_description?: string;
  event_date?: string;
  direction_type?: DirectionType;
  event_pic?: string;
  available_roles?: EventRole[]
}
