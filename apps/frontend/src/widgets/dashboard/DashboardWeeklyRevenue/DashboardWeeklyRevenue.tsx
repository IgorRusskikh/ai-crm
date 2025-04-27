'use client';

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { Suspense, use, useEffect, useState } from 'react';

import { CgLoadbarSound } from 'react-icons/cg';
import Container from 'apps/frontend/src/shared/components/common/Container';
import WeeklyRevenueSkeleton from 'apps/frontend/src/shared/skeletons/dashboard/WeeklyRevenueSkeleton/WeeklyRevenueSkeleton';
import styles from './DashboardWeeklyRevenue.module.css';

type WeeklyDataItem = {
  day: string;
  morning: number;
  evening: number;
};

const fetchWeeklyData = (): Promise<WeeklyDataItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { day: '17', morning: 30, evening: 45 },
        { day: '18', morning: 35, evening: 40 },
        { day: '19', morning: 25, evening: 30 },
        { day: '20', morning: 40, evening: 35 },
        { day: '21', morning: 30, evening: 40 },
        { day: '22', morning: 35, evening: 30 },
        { day: '23', morning: 40, evening: 35 },
        { day: '24', morning: 30, evening: 30 },
        { day: '25', morning: 45, evening: 35 },
      ]);
    }, 1500);
  });
};

const weeklyDataPromise = fetchWeeklyData();

const DashboardWeeklyRevenue = () => {
  return (
    <Container>
      <Container.Header title="Weekly Revenue" Icon={CgLoadbarSound} />

      <WeeklyRevenueChart />
    </Container>
  );
};

export default DashboardWeeklyRevenue;

const WeeklyRevenueChart = () => {
  const [isClient, setIsClient] = useState(false);

  const weeklyData = use(weeklyDataPromise);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <WeeklyRevenueSkeleton />;

  return (
    <ResponsiveContainer className={`${styles.chartContainer}`} height={234}>
      <BarChart
        className={`${styles.barChart}`}
        data={weeklyData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={40}
      >
        <XAxis dataKey="day" axisLine={false} tickLine={false} />
        <Tooltip />
        <Bar
          dataKey="evening"
          stackId="a"
          fill="#8884d8"
          radius={[0, 0, 0, 0]}
        />
        <Bar
          dataKey="morning"
          stackId="a"
          fill="#82d1f1"
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
