import { DirectionLeadersListSchema } from '../schema/DirectionLeadersSchema/DirectionLeadersSchema';
import { StateSchema } from '../schema/state/StateSchema';

export function mergeStateDirectionLeaders(
  state: StateSchema,
  payload: Partial<DirectionLeadersListSchema>,
): StateSchema {
  return {
    ...state,
    directionLeaders: {
      ...state.directionLeaders,
      ...payload,
    },
  };
}
