import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActiveEventsPage as StyledActiveEventsPage, Wrapper } from './ActiveEventsPage.style';
import { EventList } from '../../components/EventList';
import { BlockTitle } from '../../components/BlockTitle';
import { getActiveEvents } from '../../selectors/getActiveEvents';
import { LoadingStatus } from '../../types/api/api';
import { Spinner } from '../../components/Spinner';
import { fetchActiveEventListService } from '../../services/fetchActiveEventListService';

const ActiveEventsPage: React.FC = function ActiveEventsPage(props) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchActiveEventListService(null));
  }, []);

  const { activeEventsList, loadingStatus } = useSelector(getActiveEvents);

  const renderActiveEvents = activeEventsList
    && activeEventsList.length
    && loadingStatus === LoadingStatus.READY;

  return (
    <Wrapper>
      <BlockTitle>
        Мероприятия:
      </BlockTitle>
      {renderActiveEvents ? (
        <StyledActiveEventsPage>
          <EventList events={activeEventsList} />
        </StyledActiveEventsPage>
      ) : null}
      {loadingStatus === LoadingStatus.LOADING && <Spinner />}
    </Wrapper>
  );
};

export default ActiveEventsPage;
