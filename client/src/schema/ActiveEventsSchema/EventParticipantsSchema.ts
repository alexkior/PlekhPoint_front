import { LoadingStatus } from '../../types/api/api';
import { EventRole } from './EventSchema';

export interface EventParticipantsListSchema {
  eventParticipantsList?: EventParticipantShema[],
  loadingStatus?: LoadingStatus
}

export interface EventParticipantShema {
  participant_name: string;
  participant_second_name: string;
  photo_url: string;
  participant_role: EventRole
}

export interface FetchEventParticipantsPayloadSchema {
  event_id: number
}

export interface EventParticipantsResponse {
  event_participants: EventParticipantDTO[]
}

export interface EventParticipantDTO {
  participant_name: string;
  participant_second_name: string;
  photo_url: string;
  participant_role: EventRole
}
