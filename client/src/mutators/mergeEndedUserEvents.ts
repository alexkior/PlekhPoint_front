import { EndedUserEventsSchema } from '../schema/ActiveEventsSchema/EndedUserEventsSchema';
import { StateSchema } from '../schema/state/StateSchema';

export function mergeEndedUserEvents(
  state: StateSchema,
  payload: Partial<EndedUserEventsSchema>,
): StateSchema {
  return {
    ...state,
    endedUserEvents: {
      ...state.endedUserEvents,
      ...payload,
    },
  };
}
