import { AuthSchema } from '../schema/AuthShema/AuthSchema';
import { StateSchema } from '../schema/state/StateSchema';

export function mergeStateAuth(state: StateSchema, payload: Partial<AuthSchema>): StateSchema {
  return {
    ...state,
    auth: {
      ...state.auth,
      ...payload,
    },
  };
}
