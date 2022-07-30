import { LoadingStatus } from '../../types/api/api';

export interface StructuresListSchema {
  structuresList?: StructureSchema[];
  loadingStatus?: LoadingStatus
}

export interface StructureSchema {
  id: number;
  name: string;
  photo_url?: string;
  event_quantity: number;
}

export interface StructuresResponse {
  structures: StructureSchema[]
}

export interface StructureDTO {
  id: number;
  name: string;
  photo_url?: string;
  event_quantity: number;
}
