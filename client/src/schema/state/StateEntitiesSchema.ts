export type StateEntitiesSchema = {
  [P in keyof StateEntitiesMap]?: Record<string, StateEntitiesMap[P]>
};

export interface StateEntitiesMap {
  entity: String[]
}

export type StateEntitiesSchemaKey = keyof StateEntitiesMap
