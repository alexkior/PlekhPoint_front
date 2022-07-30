import { StateEntitiesMap, StateEntitiesSchemaKey } from '../schema/state/StateEntitiesSchema';
import { StateSchema } from '../schema/state/StateSchema';

export function mergeStateEntity<T extends StateEntitiesSchemaKey>(
  state: StateSchema,
  entityKey: T,
  entityId: string,
  newEntity: StateEntitiesMap[T] | undefined,
) {
  const { entities } = state;
  const existingEntity = entities && entities[entityKey] ? entities[entityKey] : undefined;

  return {
    ...state,
    entities: {
      ...entities,
      [entityKey]: {
        ...(entities && entities[entityKey]),
        [entityId]: {
          ...(existingEntity ? existingEntity[entityId] : undefined),
          ...newEntity,
        },
      },
    },
  };
}
