import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RegInfoSchema } from '../../../../schema/AuthShema/AuthSchema';
import { getRegInInfo } from '../../../../selectors/auth/getRegInInfo';
import { regUserService } from '../../../../services/auth/regUserService';
import { setRegInInfoService } from '../../../../services/auth/setRegInInfoService';
import { LoadingStatus } from '../../../../types/api/api';
import { RegInCard as StyledRegInCard, Wrapper } from './RegInCard.style';
import { Input } from './components/Input';
import { Button } from './components/Button';

export interface RegInCardProps {
  changeAuthCard: () => void
}

const RegInCard: React.FC<RegInCardProps> = function RegInCard(props) {
  const { changeAuthCard } = props;
  const dispatch = useDispatch();

  const {
    email,
    group,
    name,
    second_name,
    third_name,
    loadingStatus,
    message,
    error,
  } = useSelector(getRegInInfo);

  const setRegInInfo = React.useCallback((value: RegInfoSchema) => {
    dispatch(setRegInInfoService(value));
  }, [dispatch]);

  const onRegIn = React.useCallback(() => {
    dispatch(regUserService(null));
  }, [dispatch]);

  const isLoading = loadingStatus === LoadingStatus.LOADING;
  const isError = loadingStatus === LoadingStatus.ERROR && error;
  const isReady = loadingStatus === LoadingStatus.READY && message;

  return (
    <Wrapper>
      <StyledRegInCard>
        <Input
          name={name}
          type="text"
          disabled={isLoading}
          placeholder="Имя"
          value={name}
          onChange={(event) => setRegInInfo({ name: event.target.value })}
        />
        <Input
          name={second_name}
          type="text"
          disabled={isLoading}
          placeholder="Фамилия"
          value={second_name}
          onChange={(event) => setRegInInfo({ second_name: event.target.value })}
        />
        <Input
          name={third_name}
          type="text"
          disabled={isLoading}
          placeholder="Отчество"
          value={third_name}
          onChange={(event) => setRegInInfo({ third_name: event.target.value })}
        />
        <Input
          name={email}
          type="text"
          disabled={isLoading}
          placeholder="email"
          value={email}
          onChange={(event) => setRegInInfo({ email: event.target.value })}
        />
        <Input
          name={group}
          type="text"
          disabled={isLoading}
          placeholder="Номер группы"
          value={group}
          onChange={(event) => setRegInInfo({ group: event.target.value })}
        />
        {isError ? error : null}
        {isReady ? message : null}
        <br />
        <Button onClick={onRegIn}>Зарегистрироваться</Button>
        <Button onClick={changeAuthCard}>На страницу авторизации</Button>
      </StyledRegInCard>
    </Wrapper>
  );
};

export default RegInCard;
