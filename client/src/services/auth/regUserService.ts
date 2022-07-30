import { checkIsServerResponseError, createPostFetchRequest } from '../../helpers/api/apiHelpers';
import { mergeStateAuthRegInfo } from '../../mutators/mergeStateAuthRegInfo';
import { RegUserPayloadSchema, RegUserResponse } from '../../schema/AuthShema/AuthSchema';
import { getRegInInfo } from '../../selectors/auth/getRegInInfo';
import { createService } from '../../state/createService';
import { COMMON_ERROR_TEXT, EtlIdent, LoadingStatus, AUTH_GD_TOKEN } from '../../types/api/api';

const REGISTER_SUCCESS_MESSAGE = 'Регистрация успешна!';

export const regUserService = createService(async (
  _: null,
  { getState, setState },
) => {
  const { name, second_name, email, group, third_name } = getRegInInfo(getState());

  if (!name || !second_name || !email || !group) {
    return;
  }

  setState(mergeStateAuthRegInfo(getState(), { loadingStatus: LoadingStatus.LOADING }));

  const request = createPostFetchRequest<RegUserPayloadSchema>(
    EtlIdent.regUser,
    AUTH_GD_TOKEN,
    {
      name,
      second_name,
      third_name,
      email,
      group,
    },
  );

  try {
    const serverResponse = await fetch(request);
    const { response } = await serverResponse.json() as RegUserResponse;

    const isError = checkIsServerResponseError(response.response_code);

    setState(mergeStateAuthRegInfo(getState(), {
      loadingStatus: isError ? LoadingStatus.ERROR : LoadingStatus.READY,
      error: isError ? (response.response_msg || COMMON_ERROR_TEXT) : undefined,
      message: !isError ? REGISTER_SUCCESS_MESSAGE : undefined,
      email: isError ? email : '',
      group: isError ? group : '',
      name: isError ? name : '',
      second_name: isError ? second_name : '',
      third_name: isError ? third_name : '',
    }));
  } catch (e) {
    setState(mergeStateAuthRegInfo(getState(), {
      loadingStatus: LoadingStatus.ERROR,
      error: COMMON_ERROR_TEXT,
    }));
  }
});
