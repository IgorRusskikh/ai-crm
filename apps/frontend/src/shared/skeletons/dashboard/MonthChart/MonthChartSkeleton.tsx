import { Skeleton } from '@heroui/react';
import styles from './MonthChartSkeleton.module.css';

const MonthChartSkeleton = () => {
  return (
    <div className={styles.skeletonWrapper}>
      <Skeleton className={styles.skeleton}></Skeleton>
    </div>
  );
};

export default MonthChartSkeleton;
