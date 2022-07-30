import { mergeEndedUserEvents } from '../mutators/mergeEndedUserEvents';

import { getStudentId } from '../selectors/auth/getStudentId';
import { createService } from '../state/createService';
import { LoadingStatus } from '../types/api/api';
import { fetchEventListService } from './fetchEventListService';

export const fetchUserEndedEventListService = createService(async (
  _: null,
  { getState, setState, dispatch },
) => {
  setState(mergeEndedUserEvents(getState(), { loadingStatus: LoadingStatus.LOADING }));

  const student_id = getStudentId(getState());

  const userEndedEventList = await dispatch(fetchEventListService({ student_id }));

  setState(mergeEndedUserEvents(getState(), {
    loadingStatus: LoadingStatus.READY,
    endedUserEventsList: userEndedEventList,
  }));
});
