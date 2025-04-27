import { Skeleton } from '@heroui/react';
import styles from './WeeklyRevenueSkeleton.module.css';

const WeeklyRevenueSkeleton = () => {
  return (
    <div className={`${styles.container}`}>
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className={`${styles.barContainer}`}>
          <Skeleton className={`${styles.bar}`} />
          <Skeleton className={`${styles.day}`} />
        </div>
      ))}
    </div>
  );
};

export default WeeklyRevenueSkeleton;
