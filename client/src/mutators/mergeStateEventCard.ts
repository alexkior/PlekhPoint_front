import { EventCardSchema } from '../schema/ActiveEventsSchema/EventCardSchema';
import { StateSchema } from '../schema/state/StateSchema';

export function mergeStateEventCard(
  state: StateSchema,
  payload: Partial<EventCardSchema>,
): StateSchema {
  return {
    ...state,
    event: {
      ...state.event,
      ...payload,
    },
  };
}
