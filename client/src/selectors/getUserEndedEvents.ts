import { ActiveEventsListSchema } from '../schema/ActiveEventsSchema/ActiveEventsSchema';
import { EndedUserEventsSchema } from '../schema/ActiveEventsSchema/EndedUserEventsSchema';
import { StateSchema } from '../schema/state/StateSchema';
import { LoadingStatus } from '../types/api/api';

export function getUserEndedEvents(state: StateSchema): EndedUserEventsSchema {
  return state.endedUserEvents || {
    endedUserEventsList: [],
    loadingStatus: LoadingStatus.LOADING,
  };
}
