import { StateSchema } from '../schema/state/StateSchema';

export function mergeStateRoot(state: StateSchema, payload: Partial<StateSchema>): StateSchema {
  return {
    ...state,
    ...payload,
  };
}
