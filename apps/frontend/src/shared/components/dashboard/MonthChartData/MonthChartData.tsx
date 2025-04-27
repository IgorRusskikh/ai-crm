import { useEffect, useState } from 'react';

import { MdOutlineDone } from 'react-icons/md';
import MonthChartDataSkeleton from '../../../skeletons/dashboard/MonthChartDataSkeleton';
import styles from './MonthChartData.module.css';

interface IProps {
  totalAmount: number;
  prevTotalAmount: number;
}

const MonthChartData = ({ totalAmount, prevTotalAmount }: IProps) => {
  const percentage = (
    ((totalAmount - prevTotalAmount) / prevTotalAmount) *
    100
  ).toFixed(2);

  return (
    <div className={`${styles.chartData}`}>
      <p className={`${styles.totalAmount}`}>{totalAmount}</p>
      <p className={`${styles.total}`}>
        Total Spent{' '}
        <span className={`${styles.percentage}`}>{percentage}%</span>
      </p>

      <div className={`${styles.statusContainer}`}>
        <div className={`${styles.iconContainer}`}>
          <MdOutlineDone className={`${styles.statusIcon}`} />
        </div>
        <span className={`${styles.statusText}`}>On track</span>
      </div>
    </div>
  );
};

export default MonthChartData;
