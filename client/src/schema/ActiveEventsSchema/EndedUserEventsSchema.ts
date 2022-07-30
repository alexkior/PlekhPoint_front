import { LoadingStatus } from '../../types/api/api';
import { EventSchema } from './EventSchema';

export interface EndedUserEventsSchema {
  endedUserEventsList?: EventSchema[];
  loadingStatus?: LoadingStatus
}
