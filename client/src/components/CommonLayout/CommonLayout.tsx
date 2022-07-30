import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { ContentWrapper } from './CommonLayout.style';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const CommonLayout: React.FC = function CommonLayout() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Footer />
    </>
  );
};
