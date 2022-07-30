export const BASE_GD_ETL_URL = 'http://62.113.105.211:8080/https://gdcloud.ru/prue-dev/hooks/etl';
export const AUTH_GD_TOKEN = 'a9c50b85-4f4e-4088-824d-f94e05552072';

export enum EtlIdent {
  directions = 'REU_GET_MAIN_DIRECTIONS_LIST',
  directionLeaders = 'REU_GET_DIRECTION_LEADERS',
  structures = 'REU_GET_MAIN_STRUCT_LIST',
  userInfo = 'REU_GET_USER_INFO',
  eventList = 'REU_GET_EVENT_LIST',
  event = 'REU_GET_EVENT',
  eventParticipants = 'REU_GET_EVENT_PARTICIPANTS',

  regUserOnIvent = 'REU_REG_USER_ON_EVENT',
  regUser = 'REU_REG_USER',
  logInUser = 'REU_LOG_IN_USER'
}

export const COMMON_ERROR_TEXT = 'Что-то пошло не так, попробуйте позже';

export enum LoadingStatus {
  READY = 'READY',
  LOADING = 'LOADING',
  ERROR = 'ERROR'
}

export interface StatusResponse {
  response_code: string;
  response_msg: string;
}
