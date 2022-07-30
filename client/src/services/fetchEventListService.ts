import { createPostFetchRequest } from '../helpers/api/apiHelpers';
import { mapEventsResponseToEvents } from '../mappers/eventsMapper';
import { mergeStateEventCard } from '../mutators/mergeStateEventCard';
import { EventListResponse, FetchEventListPayloadSchema } from '../schema/ActiveEventsSchema/EventListSchema';
import { EventSchema } from '../schema/ActiveEventsSchema/EventSchema';
import { getGDToken } from '../selectors/auth/getGDToken';
import { createService } from '../state/createService';
import { EtlIdent, LoadingStatus } from '../types/api/api';

export interface FetchEventListParams {
  student_id?: number
  direction_code?: number
  is_ended?: boolean
  org_id?: number
  is_show_site?: boolean
}

export const fetchEventListService = createService(async function fetchEventListService(
  fetchEventParams: FetchEventListParams,
  { getState, setState },
): Promise<EventSchema[]> {
  const gdToken = getGDToken(getState());

  if (!gdToken) {
    return [];
  }

  setState(mergeStateEventCard(getState(), { loadingStatus: LoadingStatus.LOADING }));

  const request = createPostFetchRequest<FetchEventListPayloadSchema>(
    EtlIdent.eventList,
    gdToken,
    { ...fetchEventParams },
  );

  try {
    const response = await fetch(request);
    const data = await response.json() as EventListResponse;

    return mapEventsResponseToEvents(data);
  } catch (e) {
    console.log(e);
    return [];
  }
});
