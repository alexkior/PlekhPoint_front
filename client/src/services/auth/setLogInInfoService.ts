import { mergeStateAuthLogInInfo } from '../../mutators/mergeStateAuthLogInInfo';
import { LogInInfoSchema } from '../../schema/AuthShema/AuthSchema';
import { createService } from '../../state/createService';

export const setLogInInfoService = createService(async (
  logInfoParams: LogInInfoSchema,
  { getState, setState },
) => {
  setState(mergeStateAuthLogInInfo(getState(), logInfoParams));
});
