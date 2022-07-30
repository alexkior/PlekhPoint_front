import * as React from 'react';

import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Header as StyledHeader, InnerWrapper, TitleWrapper, Wrapper } from './Header.style';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { NavButton } from './components/NavButton';
import { ProfileScores } from './components/ProfileScores';
import { Title } from './components/Title';
import { SubTitle } from './components/SubTitle';
import { RouteNames } from '../../types/route';
import { getPPFormatedString } from '../../helpers/getPPFormatedString';
import { fetchUserInfoService } from '../../services/fetchUserInfoService';
import { getUser } from '../../selectors/user/getUser';
import { LoadingStatus } from '../../types/api/api';
import { getUserHeaderTitle } from '../../helpers/getUserHeaderTitle';
import { getUserInfo } from '../../selectors/user/getUserInfo';

export interface HeaderProps {
  color?: string;
  isProfile?: boolean;
}

const Header: React.FC<HeaderProps> = function Header(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  const { loadingStatus } = useSelector(getUserInfo);
  const user = useSelector(getUser);
  const isUserLoading = loadingStatus === LoadingStatus.LOADING;

  React.useEffect(() => {
    dispatch(fetchUserInfoService(null));
  }, [location, dispatch]);

  const userHeaderTitle = React.useMemo(() => getUserHeaderTitle(
    user?.student_name,
    user?.student_second_name,
  ), [user]);

  return (
    <Wrapper>
      <StyledHeader {...props}>
        <InnerWrapper>
          <Navbar>

            <NavButton page={RouteNames.MAIN}>PP</NavButton>

            <NavButton page={RouteNames.ABOUT}>О ПРОЕКТЕ</NavButton>

            <NavButton page={RouteNames.EVENTLIST}>МЕРОПРИЯТИЯ</NavButton>

            <NavButton page={RouteNames.PAGE404}>МАГАЗИН</NavButton>

            <NavButton
              color={RouteNames.PROFILE === location.pathname ? '#d17e00' : '#89196a'}
              page={RouteNames.PROFILE}
            >
              {userHeaderTitle}
              <ProfileScores isLoading={isUserLoading}>
                {getPPFormatedString(user?.PP_quantity, true)}
              </ProfileScores>
            </NavButton>
          </Navbar>

          <TitleWrapper>
            <Title>Plekhanov Point</Title>
            <SubTitle>
              Российский экономический университет им. Г.В. Плеханова
            </SubTitle>
          </TitleWrapper>
        </InnerWrapper>
      </StyledHeader>
      <Background />
    </Wrapper>
  );
};

export default Header;
