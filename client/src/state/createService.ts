import { ServiceAction, ServiceCallback, ServiceCreator } from './redux';

export function createService<Input, Output>(
  callback: ServiceCallback<Input, Output>,
): ServiceCreator<Input, Output> {
  return function (data: Input): ServiceAction<Output> {
    return function (options) {
      return callback(data, options);
    };
  };
}
