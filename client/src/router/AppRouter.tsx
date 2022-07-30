import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

export const AppRouter: React.FC = function AppRouter() {
  return useRoutes(routes);
};
