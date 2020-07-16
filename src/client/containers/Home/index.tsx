import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Layout } from 'antd';

const { lazy } = React;
const { Content } = Layout;
const CurrentHouse = lazy(() => import('../../componets/CurrentHouse'));

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <Content className="content">
      <div className="content-section">
        <CurrentHouse />
      </div>
    </Content>
  );
};

export default Home;
