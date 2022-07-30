import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import { getIsAuth } from '../selectors/auth/getIsAuth';
import { RouteNames } from '../types/route';

interface AccessMiddlewareProps {
  children: JSX.Element,
  target: RouteNames
}

const authProtectedRoutes: RouteNames[] = [
  RouteNames.MAIN,
  RouteNames.PROFILE,
  RouteNames.ABOUT,
  RouteNames.EVENTLIST,
  RouteNames.EVENT,
];

export function AccessMiddleware({ children, target }: AccessMiddlewareProps): JSX.Element {
  const auth = useSelector(getIsAuth);
  const location = useLocation();

  if (!auth && authProtectedRoutes.includes(target)) {
    return <Navigate to={RouteNames.AUTH} state={{ from: location }} replace />;
  }

  if (auth && target === RouteNames.AUTH) {
    return <Navigate to={RouteNames.MAIN} replace />;
  }

  return children;
}
