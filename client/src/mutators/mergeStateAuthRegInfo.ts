import { RegInfoSchema } from '../schema/AuthShema/AuthSchema';
import { StateSchema } from '../schema/state/StateSchema';

export function mergeStateAuthRegInfo(
  state: StateSchema,
  payload: Partial<RegInfoSchema>,
): StateSchema {
  return {
    ...state,
    regInfo: {
      ...state.regInfo,
      ...payload,
    },
  };
}
