import { AxiosRequestConfig } from 'axios';
import { BASE_GD_ETL_URL } from '../../types/api/api';

export function getEtlApiConfig(token: string, ident: string): AxiosRequestConfig {
  return {
    baseURL: BASE_GD_ETL_URL,
    params: {
      ident,
      token,
    },
  };
}

export function createPostFetchRequest<T extends Object>(
  ident: string,
  token: string,
  body: T,
): Request {
  const requestUrl = `${BASE_GD_ETL_URL}?ident=${ident}&token=${token}`;

  const requestInit: RequestInit = {
    method: 'POST',
    body: JSON.stringify(body),
  };

  return new Request(requestUrl, requestInit);
}

export function checkIsServerResponseError(responseCode: string): boolean {
  return responseCode[0] === '1';
}
