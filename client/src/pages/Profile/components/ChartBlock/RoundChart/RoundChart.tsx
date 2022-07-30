import * as React from 'react';
import {
  Chart,
  PieSeries,
  Tooltip,
  Legend,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import {
  Animation,
  EventTracker,
  HoverState,
} from '@devexpress/dx-react-chart';
import { RoundChart as StyledRoundChart } from './RoundChart.style';
import { ChartType } from '../RoundChartList/RoundChartList';
import { getPPFormatedString } from '../../../../../helpers/getPPFormatedString';

export interface ChartData {
  direction: string;
  area: number;
}

export interface RoundChartProps {
  chartName: ChartType;
  placeholder: string;
  data?: ChartData[];
}

const TooltipText: React.FC<Tooltip.ContentProps> = function TooltipText(
  props,
) {
  const { text, targetItem } = props;
  const chartType = targetItem.series as ChartType;
  return (
    <div>
      {chartType === ChartType.EVENTS_BY_DIRECTIONS && `${text} мероприятий`}
      {chartType === ChartType.PP_COUNT_BY_DIRECTIONS && getPPFormatedString(Number(text))}
    </div>
  );
};

const RoundChart: React.FC<RoundChartProps> = function RoundChart(props) {
  const { data, chartName, placeholder } = props;

  const hasNoData = React.useMemo(() => {
    if (!data || data.length === 0) return true;

    const isNullable = data.reduce((acc, value) => acc + value.area, 0);

    return isNullable === 0;
  }, [data]);

  return (
    <StyledRoundChart>
      {hasNoData ? (
        placeholder
      ) : (
        <Chart data={data} height={250} width={500}>
          <Animation />
          <EventTracker />
          <PieSeries
            valueField="area"
            argumentField="direction"
            name={chartName}
          />
          <Box
            sx={{
              '& .MuiList-root': {
                background: '#3a3f76',
                color: '#fff',
              },
            }}
          >
            <Legend />
          </Box>
          <HoverState />
          <Tooltip contentComponent={TooltipText} />
        </Chart>
      )}
    </StyledRoundChart>
  );
};

export default RoundChart;
