import { StateSchema } from '../schema/state/StateSchema';
import { UserInfoSchema } from '../schema/UserSchema/UserShema';

export function mergeStateUserInfo(
  state: StateSchema,
  payload: Partial<UserInfoSchema>,
): StateSchema {
  return {
    ...state,
    userInfo: {
      ...state.userInfo,
      ...payload,
    },
  };
}
