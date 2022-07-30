import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthLayout as StyledAuthLayout } from './AuthLayout.style';

export const AuthLayout: React.FC = function AuthLayout() {
  return (
    <StyledAuthLayout>
      <Outlet />
    </StyledAuthLayout>
  );
};
