import { createPostFetchRequest } from '../helpers/api/apiHelpers';
import { mapEventResponseToEvent } from '../mappers/eventsMapper';
import { mergeStateEventCard } from '../mutators/mergeStateEventCard';
import { EventResponse, FetchEventPayloadSchema } from '../schema/ActiveEventsSchema/EventSchema';
import { getGDToken } from '../selectors/auth/getGDToken';
import { getStudentId } from '../selectors/auth/getStudentId';
import { createService } from '../state/createService';
import { EtlIdent, LoadingStatus } from '../types/api/api';

export interface FetchEventParams {
  event_id: number
}

export const fetchEventService = createService(async (
  fetchEventParams: FetchEventParams,
  { getState, setState },
) => {
  const gdToken = getGDToken(getState());
  const student_id = getStudentId(getState());

  const { event_id } = fetchEventParams;

  if (!gdToken || !student_id) {
    return;
  }

  setState(mergeStateEventCard(getState(), { loadingStatus: LoadingStatus.LOADING }));

  const request = createPostFetchRequest<FetchEventPayloadSchema>(
    EtlIdent.event,
    gdToken,
    { event_id, student_id },
  );

  try {
    const response = await fetch(request);
    const data = await response.json() as EventResponse;

    setState(mergeStateEventCard(getState(), {
      loadingStatus: LoadingStatus.READY,
      event: mapEventResponseToEvent(data),
    }));
  } catch (e) {
    console.log(e);
  }
});
