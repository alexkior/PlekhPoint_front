import { LoadingStatus } from '../../types/api/api';
import { DirectionType } from '../DirectionsSchema/DirectionsSchema';

export interface DirectionLeadersListSchema {
  directionLeadersList?: DirectionLeaderSchema[];
  loadingStatus?: LoadingStatus
}

export interface DirectionLeaderSchema {
  direction_type: DirectionType;
  student: StudentSchema
}

export interface StudentSchema {
  id: string;
  name: string;
  photo_url: string
}

export interface DirectionLeadersResponse {
  direction_leaders: DirectionLeaderDTO[]
}

export interface DirectionLeaderDTO {
  direction_name: number;
  direction_code: number;
  student: StudentSchema
}
