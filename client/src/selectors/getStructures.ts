import { StateSchema } from '../schema/state/StateSchema';
import { StructuresListSchema } from '../schema/StructuresSchema/StructuresSchema';
import { LoadingStatus } from '../types/api/api';

export function getStructures(state: StateSchema): StructuresListSchema {
  return state.structures || {
    structuresList: [],
    loadingStatus: LoadingStatus.LOADING,
  };
}
