import { EventDTO } from './EventSchema';

export interface FetchEventListPayloadSchema {
  student_id?: number
  direction_code?: number
  is_ended?: boolean
  org_id?: number
  is_show_site?: boolean
}

export interface EventListResponse {
  event_list: EventDTO[]
}
