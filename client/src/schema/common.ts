import { LoadingStatus } from '../types/api/api';

export interface SchemaWithErrorAndStatus {
  error?: string;
  message?: string;
  loadingStatus?: LoadingStatus
}
