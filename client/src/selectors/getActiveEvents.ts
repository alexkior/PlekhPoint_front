import { ActiveEventsListSchema } from '../schema/ActiveEventsSchema/ActiveEventsSchema';
import { StateSchema } from '../schema/state/StateSchema';
import { LoadingStatus } from '../types/api/api';

export function getActiveEvents(state: StateSchema): ActiveEventsListSchema {
  return state.activeEvents || {
    activeEventsList: [],
    loadingStatus: LoadingStatus.LOADING,
  };
}
