'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis } from 'recharts';
import { use, useEffect, useState } from 'react';

import DailyTrafficSkeleton from '../../../skeletons/dashboard/DailyTrafficSkeleton';

type TrafficDataItem = {
  hour: string;
  value: number;
};

const fetchTrafficData = (): Promise<TrafficDataItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { hour: '00', value: 50 },
        { hour: '04', value: 30 },
        { hour: '08', value: 90 },
        { hour: '12', value: 40 },
        { hour: '14', value: 60 },
        { hour: '16', value: 100 },
        { hour: '18', value: 25 },
      ]);
    }, 1500);
  });
};

const trafficDataPromise = fetchTrafficData();

const DailyTrafficChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const trafficData = use(trafficDataPromise);

  if (!isClient) return <DailyTrafficSkeleton />;

  return (
    <ResponsiveContainer width="100%" height={227}>
      <BarChart
        data={trafficData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
        barGap={20}
      >
        <defs>
          <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4c39f2" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <XAxis dataKey="hour" axisLine={false} tickLine={false} />
        <Bar
          dataKey="value"
          fill="url(#trafficGradient)"
          radius={[10, 10, 0, 0]}
          background={{ fill: 'transparent' }}
          isAnimationActive={false}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DailyTrafficChart;
