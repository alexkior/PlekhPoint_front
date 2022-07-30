import { mergeStateActiveEvents } from '../mutators/mergeStateActiveEvents';
import { mergeStateEventCard } from '../mutators/mergeStateEventCard';
import { createService } from '../state/createService';
import { LoadingStatus } from '../types/api/api';
import { fetchEventListService } from './fetchEventListService';

export const fetchActiveEventListService = createService(async (
  _: null,
  { getState, setState, dispatch },
) => {
  setState(mergeStateEventCard(getState(), { loadingStatus: LoadingStatus.LOADING }));

  const activeEventList = await dispatch(fetchEventListService({ is_show_site: true }));

  setState(mergeStateActiveEvents(getState(), {
    loadingStatus: LoadingStatus.READY,
    activeEventsList: activeEventList,
  }));
});
