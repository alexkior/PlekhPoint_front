import { checkIsServerResponseError, createPostFetchRequest } from '../helpers/api/apiHelpers';
import { mergeStateEventCard } from '../mutators/mergeStateEventCard';
import { RegUserOnEventPayloadSchema, RegUserOnEventResponse } from '../schema/ActiveEventsSchema/EventCardSchema';
import { getGDToken } from '../selectors/auth/getGDToken';
import { getStudentId } from '../selectors/auth/getStudentId';
import { createService } from '../state/createService';
import { COMMON_ERROR_TEXT, EtlIdent, LoadingStatus } from '../types/api/api';
import { fetchEventParticipantsService } from './fetchEventParticipantsService';

export interface RegUserOnEventParams {
  event_id: number;
  role_code: number;
}

export const regUserOnEventService = createService(async (
  regUserOnEventParams: RegUserOnEventParams,
  { getState, setState, dispatch },
) => {
  const gdToken = getGDToken(getState());
  const student_id = getStudentId(getState());

  const { event_id, role_code } = regUserOnEventParams;

  if (!gdToken || !student_id) {
    return;
  }

  setState(mergeStateEventCard(getState(), { registrationStatus: LoadingStatus.LOADING }));

  const request = createPostFetchRequest<RegUserOnEventPayloadSchema>(
    EtlIdent.regUserOnIvent,
    gdToken,
    { student_id, role_code, event_id },
  );

  try {
    const serverResponse = await fetch(request);
    const { response } = await serverResponse.json() as RegUserOnEventResponse;

    const isError = checkIsServerResponseError(response.response_code);

    if (isError) {
      setState(mergeStateEventCard(getState(), {
        registrationStatus: LoadingStatus.ERROR,
        error: response.response_msg,
      }));

      return;
    }

    setState(mergeStateEventCard(getState(), { registrationStatus: LoadingStatus.READY }));
    dispatch(fetchEventParticipantsService({ event_id }));
  } catch (e) {
    setState(mergeStateEventCard(getState(), {
      registrationStatus: LoadingStatus.ERROR,
      error: COMMON_ERROR_TEXT,
    }));
  }
});
