import md5 from 'blueimp-md5';
import { createPostFetchRequest } from '../../helpers/api/apiHelpers';
import { mergeStateAuth } from '../../mutators/mergeStateAuth';
import { mergeStateAuthLogInInfo } from '../../mutators/mergeStateAuthLogInInfo';
import { LogInUserPayloadSchema, LogInUserResponse } from '../../schema/AuthShema/AuthSchema';
import { getLogInInfo } from '../../selectors/auth/getLogInInfo';
import { createService } from '../../state/createService';
import { COMMON_ERROR_TEXT, EtlIdent, LoadingStatus, AUTH_GD_TOKEN } from '../../types/api/api';

export const logInService = createService(async (
  _: null,
  { getState, setState },
) => {
  setState(mergeStateAuthLogInInfo(getState(), { loadingStatus: LoadingStatus.LOADING }));

  const { email, password } = getLogInInfo(getState());

  if (!email || !password) {
    return;
  }

  const request = createPostFetchRequest<LogInUserPayloadSchema>(
    EtlIdent.logInUser,
    AUTH_GD_TOKEN,
    { email, password: md5(password) },
  );

  try {
    const serverResponse = await fetch(request);
    const data = await serverResponse.json() as LogInUserResponse;

    const { auth_user_info, response } = data;

    if (Object.keys(auth_user_info).length === 0) {
      setState(mergeStateAuthLogInInfo(getState(), {
        loadingStatus: LoadingStatus.ERROR,
        error: response.response_msg ? response.response_msg : COMMON_ERROR_TEXT,
      }));

      return;
    }

    setState(mergeStateAuth(getState(), data.auth_user_info));
    setState(mergeStateAuthLogInInfo(getState(), {
      email: undefined,
      password: undefined,
      error: undefined,
      message: undefined,
      loadingStatus: LoadingStatus.READY,
    }));
  } catch (e) {
    setState(mergeStateAuthLogInInfo(getState(), {
      loadingStatus: LoadingStatus.ERROR,
      error: COMMON_ERROR_TEXT,
    }));
  }
});
