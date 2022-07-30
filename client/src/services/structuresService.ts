import axios from 'axios';
import { getEtlApiConfig } from '../helpers/api/apiHelpers';
import { mergeStateStructures } from '../mutators/mergeStateStructures';
import { StructuresResponse } from '../schema/StructuresSchema/StructuresSchema';
import { getGDToken } from '../selectors/auth/getGDToken';
import { createService } from '../state/createService';
import { EtlIdent, LoadingStatus } from '../types/api/api';

export const structuresService = createService(async (
  _: null,
  { getState, setState },
) => {
  const gdToken = getGDToken(getState());

  if (!gdToken) {
    return;
  }

  setState(mergeStateStructures(getState(), { loadingStatus: LoadingStatus.LOADING }));

  const instance = axios.create(getEtlApiConfig(
    gdToken,
    EtlIdent.structures,
  ));

  const response = await instance.get<StructuresResponse>('/');

  const structuresList = await response.data.structures;

  setState(mergeStateStructures(getState(), {
    loadingStatus: LoadingStatus.READY,
    structuresList,
  }));
});
