import { StateSchema } from '../../schema/state/StateSchema';

export function getGDToken(state: StateSchema): Optional<string> {
  return state.auth?.gd_token;
}
