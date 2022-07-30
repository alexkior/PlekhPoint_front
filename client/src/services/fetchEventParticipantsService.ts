import { createPostFetchRequest } from '../helpers/api/apiHelpers';
import { mergeStateEventParticipants } from '../mutators/mergeStateEventParticipants';
import { EventParticipantsResponse, FetchEventParticipantsPayloadSchema } from '../schema/ActiveEventsSchema/EventParticipantsSchema';
import { getGDToken } from '../selectors/auth/getGDToken';
import { createService } from '../state/createService';
import { EtlIdent, LoadingStatus } from '../types/api/api';

export interface FetchEventParticipantsParams {
  event_id: number
}

export const fetchEventParticipantsService = createService(async (
  eventParticipantsParams: FetchEventParticipantsParams,
  { getState, setState },
) => {
  const gdToken = getGDToken(getState());

  if (!gdToken) {
    return;
  }

  const { event_id } = eventParticipantsParams;

  setState(mergeStateEventParticipants(getState(), { loadingStatus: LoadingStatus.LOADING }));

  const request = createPostFetchRequest<FetchEventParticipantsPayloadSchema>(
    EtlIdent.eventParticipants,
    gdToken,
    { event_id },
  );

  try {
    const response = await fetch(request);
    const data = await response.json() as EventParticipantsResponse;

    setState(mergeStateEventParticipants(getState(), {
      loadingStatus: LoadingStatus.READY,
      eventParticipantsList: data.event_participants,
    }));
  } catch (e) {
    console.log(e);
  }
});
