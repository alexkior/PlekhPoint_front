import { mergeStateAuthRegInfo } from '../../mutators/mergeStateAuthRegInfo';
import { RegInfoSchema } from '../../schema/AuthShema/AuthSchema';
import { createService } from '../../state/createService';

export const setRegInInfoService = createService(async (
  regInfoParams: RegInfoSchema,
  { getState, setState },
) => {
  setState(mergeStateAuthRegInfo(getState(), regInfoParams));
});
