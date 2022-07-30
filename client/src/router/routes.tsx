import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import { Auth } from '../pages/Auth/Auth';
import { Main } from '../pages/Main';
import { About } from '../pages/About';
import { Page404 } from '../pages/Page404';
import { Profile } from '../pages/Profile';
import { CommonLayout } from '../components/CommonLayout/CommonLayout';
import { AuthLayout } from '../components/AuthLayout/AuthLayout';
import { RouteNames } from '../types/route';
import { AccessMiddleware } from './AccessMiddleware';
import { ActiveEventsPage } from '../pages/ActiveEventsPage';
import { EventPage } from '../pages/EventPage';

export const routes: RouteObject[] = [
  {
    path: RouteNames.MAIN,
    element: <CommonLayout />,
    children: [
      {
        index: true,
        element: (
          <AccessMiddleware
            children={<Main />}
            target={RouteNames.MAIN}
          />
        ),
      },
      {
        path: RouteNames.ABOUT,
        element: (
          <AccessMiddleware
            children={<About />}
            target={RouteNames.ABOUT}
          />
        ),
      },
      {
        path: RouteNames.EVENTLIST,
        element: (
          <AccessMiddleware
            children={<ActiveEventsPage />}
            target={RouteNames.EVENTLIST}
          />
        ),
      },
      {
        path: RouteNames.EVENT,
        children: [
          {
            path: ':id',
            element: (
              <AccessMiddleware
                children={<EventPage />}
                target={RouteNames.EVENT}
              />
            ),
          },
        ],
      },
      {
        path: RouteNames.PAGE404,
        element: (
          <AccessMiddleware
            children={<Page404 />}
            target={RouteNames.PAGE404}
          />
        ),
      },
      {
        path: RouteNames.PROFILE,
        element: (
          <AccessMiddleware
            children={<Profile />}
            target={RouteNames.PROFILE}
          />
        ),
      },
      { path: '*', element: <Navigate to={RouteNames.MAIN} replace /> },
    ],
  },
  {
    path: RouteNames.AUTH,
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: (
          <AccessMiddleware children={<Auth />} target={RouteNames.AUTH} />
        ),
      },
      { path: '*', element: <Navigate to={RouteNames.AUTH} replace /> },
    ],
  },
];
