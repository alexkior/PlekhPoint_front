import { DirectionLeadersListSchema } from '../schema/DirectionLeadersSchema/DirectionLeadersSchema';
import { StateSchema } from '../schema/state/StateSchema';
import { LoadingStatus } from '../types/api/api';

export function getDirectionLeaders(state: StateSchema): DirectionLeadersListSchema {
  return state.directionLeaders || {
    directionLeadersList: [],
    loadingStatus: LoadingStatus.LOADING,
  };
}
