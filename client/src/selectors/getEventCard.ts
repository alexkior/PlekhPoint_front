import { EventCardSchema } from '../schema/ActiveEventsSchema/EventCardSchema';
import { StateSchema } from '../schema/state/StateSchema';
import { LoadingStatus } from '../types/api/api';

export function getEventCard(state: StateSchema): EventCardSchema {
  return state.event || {
    loadingStatus: LoadingStatus.LOADING,
  };
}
