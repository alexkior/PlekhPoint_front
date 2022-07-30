import * as React from 'react';
import { useSelector } from 'react-redux';
import { ChartBlock as StyledChartBlock } from './ChartBlock.style';
import { StepperChart } from './StepperChart';
import { RoundChartList } from './RoundChartList';
import { BlockTitle } from '../BlockTitle';
import { countStepperChartStep, getEventByDirChartData, getPpCountByDirChartData } from '../../../../helpers/charts';
import { getUser } from '../../../../selectors/user/getUser';
import { LoadingStatus } from '../../../../types/api/api';
import { Spinner } from '../../../../components/Spinner';
import { getUserInfo } from '../../../../selectors/user/getUserInfo';
import { getUserEndedEvents } from '../../../../selectors/getUserEndedEvents';
import { Menu } from '../Menu';

const ChartBlock: React.FC = function ChartBlock(props) {
  const { loadingStatus } = useSelector(getUserInfo);
  const {
    endedUserEventsList,
    loadingStatus: eventsLoadingStatus,
  } = useSelector(getUserEndedEvents);

  const user = useSelector(getUser);
  const step = countStepperChartStep(user?.PP_quantity);

  const isUserLoading = loadingStatus === LoadingStatus.LOADING;
  const isEventsLoading = eventsLoadingStatus === LoadingStatus.LOADING;

  const eventsByDirectionsData = React.useMemo(
    () => getEventByDirChartData(endedUserEventsList),
    [endedUserEventsList],
  );

  const ppCountByDirectionsData = React.useMemo(
    () => getPpCountByDirChartData(endedUserEventsList),
    [endedUserEventsList],
  );

  return (
    <StyledChartBlock>
      <Menu />
      <BlockTitle>
        Уровень профиля:
      </BlockTitle>
      {isUserLoading ? <Spinner /> : <StepperChart step={step} />}
      <BlockTitle>
        Моя статистика:
      </BlockTitle>
      <RoundChartList
        isLoading={isEventsLoading}
        eventsByDirectionsData={eventsByDirectionsData}
        ppCountByDirectionsData={ppCountByDirectionsData}
      />
      {/* <EventList /> */}
    </StyledChartBlock>
  );
};

export default ChartBlock;
