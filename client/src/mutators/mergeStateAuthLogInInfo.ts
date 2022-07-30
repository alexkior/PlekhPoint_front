import { LogInInfoSchema } from '../schema/AuthShema/AuthSchema';
import { StateSchema } from '../schema/state/StateSchema';

export function mergeStateAuthLogInInfo(
  state: StateSchema,
  payload: Partial<LogInInfoSchema>,
): StateSchema {
  return {
    ...state,
    logInInfo: {
      ...state.logInInfo,
      ...payload,
    },
  };
}
