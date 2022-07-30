import { DirectionsListSchema } from '../schema/DirectionsSchema/DirectionsSchema';
import { StateSchema } from '../schema/state/StateSchema';

export function mergeStateDirections(
  state: StateSchema,
  payload: Partial<DirectionsListSchema>,
): StateSchema {
  return {
    ...state,
    directions: {
      ...state.directions,
      ...payload,
    },
  };
}
