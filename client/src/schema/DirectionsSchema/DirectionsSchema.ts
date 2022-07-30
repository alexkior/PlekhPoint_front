import { LoadingStatus } from '../../types/api/api';

export interface DirectionsListSchema {
  directionsList?: DirectionSchema[];
  loadingStatus?: LoadingStatus
}

export interface DirectionSchema {
  events_quantity: number;
  direction_type: DirectionType;
}

export enum DirectionType {
  SPORT = 'SPORT',
  SCIENCE = 'SCIENCE',
  SOCIAL = 'SOCIAL',
  VOLUNTARY = 'VOLUNTARY',
  STUDY = 'STUDY',
  ART = 'ART'
}

export interface DirectionsResponse {
  directions: DirectionDTO[]
}

export interface DirectionDTO {
  events_quantity: number;
  direction_code: number;
  name: string
}
