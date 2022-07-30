import { DirectionType } from '../schema/DirectionsSchema/DirectionsSchema';

import SportsIcon from '../assets/icons/about_sports.svg';
import ScienceIcon from '../assets/icons/about_science.svg';
import StudyIcon from '../assets/icons/about_study.svg';
import ArtsIcon from '../assets/icons/about_arts.svg';
import VolunteerIcon from '../assets/icons/about_volunteer.svg';
import SocialActivitiesIcon from '../assets/icons/about_social.svg';

import SportsPicture from '../assets/img/about_sports.jpg';
import SciencePicture from '../assets/img/about_science.jpg';
import StudyPicture from '../assets/img/about_study.jpg';
import ArtsPicture from '../assets/img/about_arts.jpg';
import VolunteerPicture from '../assets/img/about_volunteer.jpg';
import SocialActivitiesPicture from '../assets/img/about_social.jpg';

export const directionTypeToAboutTitle: Record<DirectionType, string> = {
  [DirectionType.SPORT]: 'Спорт',
  [DirectionType.SCIENCE]: 'Наука',
  [DirectionType.STUDY]: 'Учёба',
  [DirectionType.ART]: 'Творчество',
  [DirectionType.VOLUNTARY]: 'Добровольчество',
  [DirectionType.SOCIAL]: 'Общественная деятельность',
};

export const directionTypeToAboutIcons: Record<DirectionType, string> = {
  [DirectionType.SPORT]: SportsIcon,
  [DirectionType.SCIENCE]: ScienceIcon,
  [DirectionType.STUDY]: StudyIcon,
  [DirectionType.ART]: ArtsIcon,
  [DirectionType.VOLUNTARY]: VolunteerIcon,
  [DirectionType.SOCIAL]: SocialActivitiesIcon,
};

export const directionTypeToAboutText: Record<DirectionType, string> = {
  [DirectionType.SPORT]: 'Организовывай спортивные лиги, участвуй в соревнованиях',
  [DirectionType.SCIENCE]: 'Выступай докладчиком на научных конференциях, организовывай дни науки',
  [DirectionType.STUDY]: 'Побеждай в профессиональных конкурсах и олимпиадах, учись на отлично',
  [DirectionType.ART]: 'Организовывай команды КВН, выигрывай творческие конкурсы',
  [DirectionType.VOLUNTARY]: 'Волонтерь на различных мероприятиях, курируй команды волонтеров',
  [DirectionType.SOCIAL]: 'Руководи студенческими клубами, работай в студенческом совете',
};

export const directionTypeToAboutPictures: Record<DirectionType, string> = {
  [DirectionType.SPORT]: SportsPicture,
  [DirectionType.SCIENCE]: SciencePicture,
  [DirectionType.STUDY]: StudyPicture,
  [DirectionType.ART]: ArtsPicture,
  [DirectionType.VOLUNTARY]: VolunteerPicture,
  [DirectionType.SOCIAL]: SocialActivitiesPicture,
};

export const directionTypeToAboutAlignment: Record<DirectionType, boolean> = {
  [DirectionType.SPORT]: false,
  [DirectionType.SCIENCE]: true,
  [DirectionType.STUDY]: false,
  [DirectionType.ART]: true,
  [DirectionType.VOLUNTARY]: false,
  [DirectionType.SOCIAL]: true,
};
