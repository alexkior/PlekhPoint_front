import { StateSchema } from '../../schema/state/StateSchema';
import { UserInfoSchema } from '../../schema/UserSchema/UserShema';
import { LoadingStatus } from '../../types/api/api';

export function getUserInfo(state: StateSchema): UserInfoSchema {
  return state.userInfo || {
    loadingStatus: LoadingStatus.LOADING,
  };
}
