import { LoadingStatus } from '../../types/api/api';
import { EventSchema } from './EventSchema';

export interface ActiveEventsListSchema {
  activeEventsList?: EventSchema[];
  loadingStatus?: LoadingStatus
}
