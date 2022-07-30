import { RegInfoSchema } from '../../schema/AuthShema/AuthSchema';
import { StateSchema } from '../../schema/state/StateSchema';

export function getRegInInfo(state: StateSchema): RegInfoSchema {
  return state.regInfo || {};
}
