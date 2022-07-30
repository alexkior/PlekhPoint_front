import { mergeStateRoot } from '../../mutators/mergeStateRoot';
import { createService } from '../../state/createService';

export const deleteAuthService = createService(async (
  _: null,
  { getState, setState },
) => {
  setState(mergeStateRoot(getState(), {
    auth: undefined,
    userInfo: undefined,
  }));
});
