import { EventParticipantsListSchema } from '../schema/ActiveEventsSchema/EventParticipantsSchema';
import { StateSchema } from '../schema/state/StateSchema';

export function mergeStateEventParticipants(
  state: StateSchema,
  payload: Partial<EventParticipantsListSchema>,
): StateSchema {
  return {
    ...state,
    eventParticipants: {
      ...state.eventParticipants,
      ...payload,
    },
  };
}
