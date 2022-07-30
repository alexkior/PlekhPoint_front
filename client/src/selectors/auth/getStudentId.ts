import { StateSchema } from '../../schema/state/StateSchema';

export function getStudentId(state: StateSchema): Optional<number> {
  return state.auth?.student_id;
}
