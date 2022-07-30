import { EventListResponse } from '../schema/ActiveEventsSchema/EventListSchema';
import { EventDTO, EventResponse, EventSchema } from '../schema/ActiveEventsSchema/EventSchema';
import { directionCodeToDirectionType } from './directionMapper';

export function mapEventDTOtoEvent(
  dto: EventDTO,
): EventSchema {
  return {
    event_id: dto.event_id,
    org_name: dto.org_name,
    event_name: dto.event_name,
    event_description: dto.event_description,
    event_date: new Date(dto.event_date),
    direction_type: directionCodeToDirectionType[dto.direction_code],
    available_roles: dto.available_roles,
    is_ended: dto.is_ended,
    is_show_site: dto.is_show_site,
    is_student_registered: dto.is_student_registered,
    student_info: dto.student_info,
  };
}

export function mapEventsResponseToEvents(
  res: EventListResponse,
): EventSchema[] {
  return res.event_list
    .map(mapEventDTOtoEvent);
}

export function mapEventResponseToEvent(
  res: EventResponse,
): EventSchema {
  return mapEventDTOtoEvent(res.event_info);
}
