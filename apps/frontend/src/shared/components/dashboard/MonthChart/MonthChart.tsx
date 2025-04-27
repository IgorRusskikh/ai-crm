'use client';

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

import MonthChartSkeleton from '../../../skeletons/dashboard/MonthChart';
import styles from './MonthChart.module.css';

interface IProps {
  data: MonthChartDataItem[];
}

type MonthChartDataItem = {
  month: string;
  topAmount: number;
  bottomAmount: number;
};

const MonthChart = ({ data }: IProps) => {
  if (!data.length) {
    return <MonthChartSkeleton />;
  }

  return (
    <div className={`${styles.chart}`}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5B00FF" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#5B00FF" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="month" stroke="#b0b3c6" />
          <Tooltip
            formatter={(value) => `$${value}`}
            contentStyle={{
              backgroundColor: '#5B00FF',
              color: '#fff',
              borderRadius: '6px',
            }}
            labelStyle={{ display: 'none' }}
          />
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="#f0f0f0"
          />

          <Line
            type="monotone"
            dataKey="value1"
            stroke="#5B00FF"
            strokeWidth={4}
            dot={{ r: 6, fill: '#fff', stroke: '#5B00FF', strokeWidth: 3 }}
            activeDot={{
              r: 8,
              stroke: '#5B00FF',
              fill: '#fff',
              strokeWidth: 4,
            }}
            fill="url(#blueGradient)"
          />
          <Line
            type="monotone"
            dataKey="value2"
            stroke="#75c9ff"
            strokeWidth={4}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthChart;
