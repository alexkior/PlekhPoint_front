import { StatusResponse } from '../../types/api/api';
import { SchemaWithErrorAndStatus } from '../common';

export interface AuthSchema {
  gd_token?: string,
  student_id?: number,
}

export interface LogInInfoSchema extends SchemaWithErrorAndStatus {
  email?: string,
  password?: string
}

export interface RegInfoSchema extends SchemaWithErrorAndStatus {
  name?: string,
  second_name?: string,
  third_name?: string,
  email?: string,
  group?: string,
}

export interface RegUserPayloadSchema {
  name: string,
  second_name: string,
  third_name?: string,
  email: string,
  group: string
}

export interface LogInUserPayloadSchema {
  email: string,
  password: string,
}

export interface LogInUserResponse {
  auth_user_info: AuthUserInfo
  response: StatusResponse
}

export interface RegUserResponse {
  response: StatusResponse
}

export interface AuthUserInfo {
  gd_token: string,
  studend_id: string,
}
