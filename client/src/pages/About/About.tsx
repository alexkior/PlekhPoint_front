import * as React from 'react';
import { About as StyledAbout } from './About.style';
import { BlockTitle } from '../../components/BlockTitle';
import { InfoBlock } from './components/InfoBlock';
import { Banner } from './components/Banner';
import { AboutInfoBlockListSchema } from '../../schema/AboutShema/AboutShema';
import {
  directionTypeToAboutTitle,
  directionTypeToAboutIcons,
  directionTypeToAboutText,
  directionTypeToAboutPictures,
  directionTypeToAboutAlignment,
} from '../../mappers/aboutMapper';

import IconSports from '../../assets/icons/about_sports.svg';
import IconScience from '../../assets/icons/about_science.svg';
import IconStudy from '../../assets/icons/about_study.svg';
import IconArts from '../../assets/icons/about_arts.svg';
import IconVolunteer from '../../assets/icons/about_volunteer.svg';
import IconSocial from '../../assets/icons/about_social.svg';

import PictureSports from '../../assets/img/about_sports.jpg';
import PictureScience from '../../assets/img/about_science.jpg';
import PictureStudy from '../../assets/img/about_study.jpg';
import PictureArts from '../../assets/img/about_arts.jpg';
import PictureVolunteer from '../../assets/img/about_volunteer.jpg';
import PictureSocial from '../../assets/img/about_social.jpg';

export interface AboutProps {}

const aboutInfoBlockList = [
  {
    title: 'Спорт',
    text: 'Организовывай спортивные лиги, участвуй в соревнованиях',
    icon: IconSports,
    picture: PictureSports,
    align: false,
  },
  {
    title: 'Наука',
    text: 'Выступай докладчиком на научных конференциях, организовывай дни науки',
    icon: IconScience,
    picture: PictureScience,
    align: true,
  },
  {
    title: 'Учеба',
    text: 'Побеждай в профессиональных конкурсах и олимпиадах, учись на отлично',
    icon: IconStudy,
    picture: PictureStudy,
    align: false,
  },
  {
    title: 'Творчество',
    text: 'Организовывай команды КВН, выигрывай творческие конкурсы',
    icon: IconArts,
    picture: PictureArts,
    align: true,
  },
  {
    title: 'Добровольчество',
    text: 'Волонтерь на различных мероприятиях, курируй команды волонтеров',
    icon: IconVolunteer,
    picture: PictureVolunteer,
    align: false,
  },
  {
    title: 'Общественная деятельность',
    text: 'Руководи студенческими клубами, работай в студенческом совете',
    icon: IconSocial,
    picture: PictureSocial,
    align: true,
  },
];

const About: React.FC<AboutProps> = function About(props) {
  return (
    <StyledAbout>
      <BlockTitle>О платформе:</BlockTitle>
      {aboutInfoBlockList.map((aboutInfoBlockList) => (
        <InfoBlock
          title={aboutInfoBlockList.title}
          icon={aboutInfoBlockList.icon}
          text={aboutInfoBlockList.text}
          picture={aboutInfoBlockList.picture}
          align={aboutInfoBlockList.align}
        />
      ))}

      <Banner>
        Становись лидером направлений и претендуй на звание Плехановская гордость!
      </Banner>
    </StyledAbout>
  );
};

export default About;
