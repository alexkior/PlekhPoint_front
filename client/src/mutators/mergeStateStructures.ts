import { StateSchema } from '../schema/state/StateSchema';
import { StructuresListSchema } from '../schema/StructuresSchema/StructuresSchema';

export function mergeStateStructures(
  state: StateSchema,
  payload: Partial<StructuresListSchema>,
): StateSchema {
  return {
    ...state,
    structures: {
      ...state.structures,
      ...payload,
    },
  };
}
