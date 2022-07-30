import { StateSchema } from '../../schema/state/StateSchema';
import { getGDToken } from './getGDToken';
import { getStudentId } from './getStudentId';

export function getIsAuth(state: StateSchema): boolean {
  return Boolean(getGDToken(state) && getStudentId(state));
}
