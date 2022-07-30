import { LoadingStatus, StatusResponse } from '../../types/api/api';
import { SchemaWithErrorAndStatus } from '../common';
import { EventSchema } from './EventSchema';

export interface EventCardSchema extends SchemaWithErrorAndStatus {
  event?: EventSchema,
  loadingStatus?: LoadingStatus
  registrationStatus?: LoadingStatus
}

export interface RegUserOnEventPayloadSchema {
  event_id: number;
  student_id: number;
  role_code: number
}

export interface RegUserOnEventResponse {
  response: StatusResponse
}
