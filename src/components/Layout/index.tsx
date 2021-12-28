import React from 'react';
import MainNavigation from './MainNavigation';
import { Layout } from './LayoutStyle';

const MainLayout: React.FC = ({ children }) => {
  return (
    <Layout>
      <div>
        <MainNavigation />
        {children}
      </div>
    </Layout>
  );
};

export default MainLayout;
