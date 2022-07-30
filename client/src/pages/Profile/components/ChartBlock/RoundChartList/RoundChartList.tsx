import * as React from 'react';
import { RoundChartList as StyledRoundChartList } from './RoundChartList.style';
import { RoundChart } from '../RoundChart';
import { ChartData } from '../RoundChart/RoundChart';
import { Spinner } from '../../../../../components/Spinner';

export interface RoundChartListProps {
  isLoading: boolean;
  eventsByDirectionsData?: ChartData[];
  ppCountByDirectionsData?: ChartData[];
}

export enum ChartType {
  EVENTS_BY_DIRECTIONS= 'EVENTS_BY_DIRECTIONS',
  PP_COUNT_BY_DIRECTIONS= 'PP_COUNT_BY_DIRECTIONS'
}

const RoundChartList:
  React.FC<RoundChartListProps> = function RoundChartList(props) {
    const { isLoading, eventsByDirectionsData, ppCountByDirectionsData } = props;
    return (
      <StyledRoundChartList>
        {isLoading
          ? <Spinner />
          : (
            <>
              <RoundChart
                data={eventsByDirectionsData}
                chartName={ChartType.EVENTS_BY_DIRECTIONS}
                placeholder="Вы не участвовали в мероприятиях"
              />
              <RoundChart
                data={ppCountByDirectionsData}
                chartName={ChartType.PP_COUNT_BY_DIRECTIONS}
                placeholder="У вас нет плехпоинтов"
              />
            </>
          )}
      </StyledRoundChartList>
    );
  };

export default RoundChartList;
