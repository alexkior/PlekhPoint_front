import { directionTypeToDirectionName } from '../mappers/directionMapper';
import { ChartData } from '../pages/Profile/components/ChartBlock/RoundChart/RoundChart';
import { EventSchema } from '../schema/ActiveEventsSchema/EventSchema';
import { DirectionType } from '../schema/DirectionsSchema/DirectionsSchema';
import { getPPFormatedString } from './getPPFormatedString';

export const STEPS = [0, 100, 1000, 10000];

export function countStepperChartStep(quantity: Optional<number>): 0 | 1 | 2 | 3 {
  if (!quantity) {
    return 0;
  }
  if (quantity >= STEPS[1] && quantity < STEPS[2]) {
    return 1;
  }
  if (quantity >= STEPS[2] && quantity < STEPS[3]) {
    return 2;
  }
  if (quantity >= STEPS[3]) {
    return 3;
  }

  return 0;
}

export function getStepperChartSteps() {
  return STEPS.map((step) => getPPFormatedString(step));
}

export function getPpCountByDirChartData(
  events: Optional<EventSchema[]>,
): ChartData[] {
  if (!events) return [];
  const eventsByDir = events.reduce((acc, event) => {
    const dirType = event.direction_type;
    const ppCount = event.student_info?.pp_accrued || 0;
    const newValue = (acc[dirType] || 0) + ppCount;
    return { ...acc, [dirType]: newValue };
  }, {} as Partial<Record<DirectionType, number>>);

  return Object.entries(eventsByDir).map(
    (dataEntry) => ({
      direction: directionTypeToDirectionName[dataEntry[0] as DirectionType],
      area: dataEntry[1] as number,
    }),
  );
}

export function getEventByDirChartData(
  events: Optional<EventSchema[]>,
): ChartData[] {
  if (!events) return [];
  const ppCountByDir = events.reduce((acc, event) => {
    const dirType = event.direction_type;
    const newValue = (acc[dirType] || 0) + 1;
    return { ...acc, [dirType]: newValue };
  }, {} as Partial<Record<DirectionType, number>>);

  return Object.entries(ppCountByDir).map(
    (dataEntry) => ({
      direction: directionTypeToDirectionName[dataEntry[0] as DirectionType],
      area: dataEntry[1] as number,
    }),
  );
}
