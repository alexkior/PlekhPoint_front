import { LogInInfoSchema } from '../../schema/AuthShema/AuthSchema';
import { StateSchema } from '../../schema/state/StateSchema';

export function getLogInInfo(state: StateSchema): LogInInfoSchema {
  return state.logInInfo || {};
}
