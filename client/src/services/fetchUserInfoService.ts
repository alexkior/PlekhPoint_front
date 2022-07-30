import { createPostFetchRequest } from '../helpers/api/apiHelpers';
import { mergeStateUserInfo } from '../mutators/mergeStateUserInfo';
import { FetchUserInfoPayloadSchema, UserInfoResponse } from '../schema/UserSchema/UserShema';
import { getGDToken } from '../selectors/auth/getGDToken';
import { getStudentId } from '../selectors/auth/getStudentId';
import { createService } from '../state/createService';
import { EtlIdent, LoadingStatus } from '../types/api/api';

export const fetchUserInfoService = createService(async (
  _: null,
  { getState, setState },
) => {
  const gdToken = getGDToken(getState());
  const student_id = getStudentId(getState());

  if (!gdToken || !student_id) {
    return;
  }

  setState(mergeStateUserInfo(getState(), { loadingStatus: LoadingStatus.LOADING }));

  const request = createPostFetchRequest<FetchUserInfoPayloadSchema>(
    EtlIdent.userInfo,
    gdToken,
    { student_id },
  );

  try {
    const response = await fetch(request);
    const data = await response.json() as UserInfoResponse;

    setState(mergeStateUserInfo(getState(), {
      loadingStatus: LoadingStatus.READY,
      user: data.user_info,
    }));
  } catch (e) {
    console.log(e);
  }
});
