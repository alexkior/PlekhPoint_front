import { StateSchema } from '../../schema/state/StateSchema';
import { UserSchema } from '../../schema/UserSchema/UserShema';
import { getUserInfo } from './getUserInfo';

export function getUser(state: StateSchema): Optional<UserSchema> {
  return getUserInfo(state)?.user;
}
