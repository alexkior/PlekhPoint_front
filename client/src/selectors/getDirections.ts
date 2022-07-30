import { DirectionsListSchema } from '../schema/DirectionsSchema/DirectionsSchema';
import { StateSchema } from '../schema/state/StateSchema';
import { LoadingStatus } from '../types/api/api';

export function getDirections(state: StateSchema): DirectionsListSchema {
  return state.directions || {
    directionsList: [],
    loadingStatus: LoadingStatus.LOADING,
  };
}
