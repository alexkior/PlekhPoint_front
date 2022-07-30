import { EventParticipantsListSchema } from '../schema/ActiveEventsSchema/EventParticipantsSchema';
import { StateSchema } from '../schema/state/StateSchema';
import { LoadingStatus } from '../types/api/api';

export function getEventParticipants(state: StateSchema): EventParticipantsListSchema {
  return state.eventParticipants || {
    eventParticipantsList: [],
    loadingStatus: LoadingStatus.LOADING,
  };
}
