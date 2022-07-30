import { StateEntitiesMap, StateEntitiesSchema, StateEntitiesSchemaKey } from '../../schema/state/StateEntitiesSchema';
import { StateSchema } from '../../schema/state/StateSchema';

export function getentityById<T extends StateEntitiesSchemaKey>(
  state: StateSchema,
  entityName: T,
  id: string | undefined,
) {
  const { entities } = state;
  const entitiesDict = (entities && entities[entityName]) as StateEntitiesSchema[T] | undefined;

  return entitiesDict && (entitiesDict[id!] as StateEntitiesMap[T] | undefined);
}
