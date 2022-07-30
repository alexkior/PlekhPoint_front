import { LoadingStatus } from '../../types/api/api';

export interface UserInfoSchema {
  user?: UserSchema;
  loadingStatus?: LoadingStatus
}

export interface UserSchema {
  student_name?: string,
  student_second_name?: string,
  PP_quantity?: number
}

export interface FetchUserInfoPayloadSchema {
  student_id: number
}

export interface UserInfoResponse {
  user_info: UserSchema
}
