import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Menu as StyledMenu, Wrapper, LinkList, LinkListWrapper } from './Menu.style';
import { UserPic } from './UserPic';
import { Name } from './Name';
import { LastName } from './LastName';
import { Bill } from './Bill';
import { Link } from './Link';
import { deleteAuthService } from '../../../../services/auth/deleteAuthService';
import DefaultUserPic from '../../../../assets/img/userPic.png';
import { getUser } from '../../../../selectors/user/getUser';
import { LoadingStatus } from '../../../../types/api/api';
import { getUserInfo } from '../../../../selectors/user/getUserInfo';

const Menu: React.FC = function Menu(props) {
  const dispatch = useDispatch();

  const { loadingStatus } = useSelector(getUserInfo);
  const user = useSelector(getUser);
  const isUserLoading = loadingStatus === LoadingStatus.LOADING;

  const deleteAuth = useCallback(() => {
    dispatch(deleteAuthService(null));
  }, [dispatch]);

  return (
    <Wrapper>
      <StyledMenu>
        <UserPic pic={DefaultUserPic} />
        <Name userFirstName={user?.student_name} isLoading={isUserLoading} />
        <LastName userLastName={user?.student_second_name} isLoading={isUserLoading} />
        <Bill userBillCount={user?.PP_quantity} isLoading={isUserLoading} />
        <LinkListWrapper>
          <LinkList>
            <Link onClick={deleteAuth}>
              Выход
            </Link>
          </LinkList>
        </LinkListWrapper>
      </StyledMenu>
    </Wrapper>
  );
};

export default Menu;
