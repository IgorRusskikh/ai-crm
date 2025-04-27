import { Skeleton } from '@heroui/react';
import styles from './MonthChartDataSkeleton.module.css';

const MonthChartDataSkeleton = () => {
  return (
    <div>
      <Skeleton className={`${styles.totalSpent}`}></Skeleton>
      <Skeleton className={`${styles.totalSpentSubtitle}`}></Skeleton>

      <Skeleton className={`${styles.status}`}></Skeleton>
    </div>
  );
};

export default MonthChartDataSkeleton;
