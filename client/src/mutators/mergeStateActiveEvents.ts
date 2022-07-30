import { ActiveEventsListSchema } from '../schema/ActiveEventsSchema/ActiveEventsSchema';
import { StateSchema } from '../schema/state/StateSchema';

export function mergeStateActiveEvents(
  state: StateSchema,
  payload: Partial<ActiveEventsListSchema>,
): StateSchema {
  return {
    ...state,
    activeEvents: {
      ...state.activeEvents,
      ...payload,
    },
  };
}
