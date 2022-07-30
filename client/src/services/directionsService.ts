import axios from 'axios';
import { getEtlApiConfig } from '../helpers/api/apiHelpers';
import { mapDirectionsResponseToDirections } from '../mappers/directionMapper';
import { mergeStateDirections } from '../mutators/mergeStateDirections';
import { DirectionsResponse } from '../schema/DirectionsSchema/DirectionsSchema';
import { getGDToken } from '../selectors/auth/getGDToken';
import { createService } from '../state/createService';
import { EtlIdent, LoadingStatus } from '../types/api/api';

export const directionService = createService(async (
  _: null,
  { getState, setState },
) => {
  const gdToken = getGDToken(getState());

  if (!gdToken) {
    return;
  }

  setState(mergeStateDirections(getState(), { loadingStatus: LoadingStatus.LOADING }));

  const instance = axios.create(getEtlApiConfig(
    gdToken,
    EtlIdent.directions,
  ));

  const response = await instance.get<DirectionsResponse>('/');

  const directionsResponse = await response.data;

  setState(mergeStateDirections(getState(), {
    loadingStatus: LoadingStatus.READY,
    directionsList: mapDirectionsResponseToDirections(directionsResponse),
  }));
});
