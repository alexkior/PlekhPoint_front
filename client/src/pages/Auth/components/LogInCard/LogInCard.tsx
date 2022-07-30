import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LogInInfoSchema } from '../../../../schema/AuthShema/AuthSchema';
import { getLogInInfo } from '../../../../selectors/auth/getLogInInfo';
import { logInService } from '../../../../services/auth/logInUserService';
import { setLogInInfoService } from '../../../../services/auth/setLogInInfoService';
import { LoadingStatus } from '../../../../types/api/api';
import { LogInCard as StyledLogInCard, Wrapper } from './LogInCard.style';
import { Input } from './components/Input';
import { Button } from './components/Button';

export interface LogInCardProps {
  changeAuthCard: () => void
}

const LogInCard: React.FC<LogInCardProps> = function LogInCard(props) {
  const { changeAuthCard } = props;
  const dispatch = useDispatch();

  const { email, password, loadingStatus, error } = useSelector(getLogInInfo);

  const setLogInInfo = React.useCallback((value: LogInInfoSchema) => {
    dispatch(setLogInInfoService(value));
  }, [dispatch]);

  const onLogIn = React.useCallback(() => {
    dispatch(logInService(null));
  }, [dispatch]);

  const isLoading = loadingStatus === LoadingStatus.LOADING;
  const isError = loadingStatus === LoadingStatus.ERROR && error;

  return (
    <Wrapper>
      <StyledLogInCard>
        <Input
          name="email"
          type="text"
          placeholder="email"
          value={email}
          disabled={isLoading}
          onChange={(event) => setLogInInfo({ email: event.target.value })}
        />
        <Input
          name="password"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(event) => setLogInInfo({ password: event.target.value })}
          disabled={isLoading}
        />
        {isError ? error : null}
        <br />
        <Button disabled={isLoading} onClick={onLogIn}>Войти</Button>
        <Button disabled={isLoading} onClick={changeAuthCard}>На страницу регистрации</Button>
      </StyledLogInCard>
    </Wrapper>
  );
};

export default LogInCard;
