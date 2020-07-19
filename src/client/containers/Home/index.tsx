import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Layout } from 'antd';

import StatisticCard from '../../componets/StatisticCard';

const { lazy } = React;
const { Content } = Layout;
const CurrentHouse = lazy(() => import('../../componets/CurrentHouse'));

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <Content className="content">
      <div className="content-section">
        <CurrentHouse />
      </div>
      <div className="content-statistic-card">
        <StatisticCard />
      </div>
    </Content>
  );
};

export default Home;
