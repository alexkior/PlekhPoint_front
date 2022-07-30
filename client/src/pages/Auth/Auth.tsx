import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Auth as StyledAuth } from './Auth.style';
import { LogInCard } from './components/LogInCard';
import { RegInCard } from './components/RegInCard';
import { Background } from './components/Background';

export const Auth: React.FC = function Auth() {
  const [isLogIn, setIsLogIn] = React.useState(false);
  const dispatch = useDispatch();

  // const inputRef = React.useRef<HTMLInputElement>(null);

  // const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  //   console.log(event.target.value);
  //   // dispatch(authService({ login: event.target.value }));
  // };

  const changeAuthCard = () => setIsLogIn((value) => !value);

  const login = 'login';

  return (
    <>
      <StyledAuth>
        {/* LOGIN:
      {' '}
      {login}
      <br />
      <input
        ref={inputRef}
        onChange={onChange}
        value={inputRef.current?.value}
      /> */}
        {isLogIn ? (
          <LogInCard changeAuthCard={changeAuthCard} />
        ) : (
          <RegInCard changeAuthCard={changeAuthCard} />
        )}
      </StyledAuth>
      <Background />
    </>
  );
};
