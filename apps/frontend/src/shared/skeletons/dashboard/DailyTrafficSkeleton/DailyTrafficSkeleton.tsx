import { Skeleton } from '@heroui/react';
import styles from './DailyTrafficSkeleton.module.css';

const DailyTrafficSkeleton = () => {
  return (
    <div className={`${styles.skeleton}`}>
      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index} className={`${styles.barContainer}`}>
          <Skeleton className={`${styles.bar}`} />
          <Skeleton className={`${styles.day}`} />
        </div>
      ))}
    </div>
  );
};

export default DailyTrafficSkeleton;
