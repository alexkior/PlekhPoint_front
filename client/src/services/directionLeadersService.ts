import axios from 'axios';
import { getEtlApiConfig } from '../helpers/api/apiHelpers';
import { mapDirLeadersResponsetoDirLeaders } from '../mappers/directionLeadersMapper';
import { mergeStateDirectionLeaders } from '../mutators/mergeStateDirectionLeaders';
import { DirectionLeadersResponse } from '../schema/DirectionLeadersSchema/DirectionLeadersSchema';
import { getGDToken } from '../selectors/auth/getGDToken';
import { createService } from '../state/createService';
import { EtlIdent, LoadingStatus } from '../types/api/api';

export const directionLeadersService = createService(async (
  _: null,
  { getState, setState },
) => {
  const gdToken = getGDToken(getState());

  if (!gdToken) {
    return;
  }

  setState(mergeStateDirectionLeaders(getState(), { loadingStatus: LoadingStatus.LOADING }));

  const instance = axios.create(getEtlApiConfig(
    gdToken,
    EtlIdent.directionLeaders,
  ));

  const response = await instance.get<DirectionLeadersResponse>('/');

  const directionLeadersResponse = await response.data;

  setState(mergeStateDirectionLeaders(getState(), {
    loadingStatus: LoadingStatus.READY,
    directionLeadersList: mapDirLeadersResponsetoDirLeaders(directionLeadersResponse),
  }));
});
