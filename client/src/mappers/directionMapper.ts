import { DirectionSchema, DirectionsResponse, DirectionType } from '../schema/DirectionsSchema/DirectionsSchema';
import ArtsIcon from '../assets/icons/arts.svg';
import StudyIcon from '../assets/icons/study.svg';
import SocialActivitiesIcon from '../assets/icons/socialActivities.svg';
import VolunteerIcon from '../assets/icons/volunteer.svg';
import ScienceIcon from '../assets/icons/science.svg';
import SportsIcon from '../assets/icons/sports.svg';

export const directionTypeToDirectionName: Record<DirectionType, string> = {
  [DirectionType.ART]: 'Творчество',
  [DirectionType.SCIENCE]: 'Наука',
  [DirectionType.SOCIAL]: 'Общественная деятельность',
  [DirectionType.SPORT]: 'Спорт',
  [DirectionType.STUDY]: 'Учёба',
  [DirectionType.VOLUNTARY]: 'Добровольчество',
};

export const directionCodeToDirectionType: Record<number, DirectionType> = {
  1: DirectionType.VOLUNTARY,
  2: DirectionType.SCIENCE,
  3: DirectionType.SOCIAL,
  4: DirectionType.SPORT,
  5: DirectionType.ART,
  6: DirectionType.STUDY,
};

export const directionTypeToDirectionIcons: Record<DirectionType, string> = {
  [DirectionType.ART]: ArtsIcon,
  [DirectionType.STUDY]: StudyIcon,
  [DirectionType.SOCIAL]: SocialActivitiesIcon,
  [DirectionType.VOLUNTARY]: VolunteerIcon,
  [DirectionType.SCIENCE]: ScienceIcon,
  [DirectionType.SPORT]: SportsIcon,
};

export function mapDirectionsResponseToDirections(res: DirectionsResponse): DirectionSchema[] {
  return res.directions
    .map((dto) => ({
      events_quantity: dto.events_quantity,
      direction_type: directionCodeToDirectionType[dto.direction_code],
    }));
}
