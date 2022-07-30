import { DirectionType } from '../DirectionsSchema/DirectionsSchema';

export interface EventSchema {
  event_id: number;
  org_name: string;
  event_name: string;
  event_description?: string;
  event_date: Date;
  direction_type: DirectionType;
  available_roles: EventRole[];
  is_ended: boolean,
  is_show_site: boolean,
  is_student_registered?: boolean,
  student_info?: EventStudentInfo
}

export interface EventDTO {
  event_id: number;
  event_name: string;
  event_description?: string;
  event_date: string;
  org_name: string;
  direction_name: string;
  direction_code: number;
  available_roles: EventRole[];
  is_ended: boolean,
  is_show_site: boolean,
  is_student_registered?: boolean,
  student_info?: EventStudentInfo
}

export interface EventStudentInfo {
  student_role: EventRole,
  pp_accrued: number,
  score: number,
  student_id: number,
}

export interface EventRole {
  role_name: string;
  role_code: number;
}

export interface EventResponse {
  event_info: EventDTO
}

export interface FetchEventPayloadSchema {
  event_id: number;
  student_id: number;
}
