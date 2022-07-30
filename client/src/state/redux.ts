import { Action } from 'redux';
import { StateSchema } from '../schema/state/StateSchema';

export type ReduxAction<S> = { payload: S } & Action;

export interface ServiceActionOptions {
  dispatch<Output>(action: ServiceAction<Output>): Output;

  getState(): StateSchema;

  setState(state: StateSchema, type?: string): void;
}

export interface ServiceAction<Output> {
  (options: ServiceActionOptions): Output
}

export type ServiceCallback<Input, Output> = (data: Input, options: ServiceActionOptions) => Output

export interface ServiceCreator<Input, Output> {
  (data: Input): ServiceAction<Output>
}
