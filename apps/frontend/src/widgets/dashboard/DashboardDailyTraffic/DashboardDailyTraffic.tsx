import Container from 'apps/frontend/src/shared/components/common/Container';
import DailyTrafficChart from 'apps/frontend/src/shared/components/dashboard/DailyTrafficChart';
import DailyTrafficSkeleton from 'apps/frontend/src/shared/skeletons/dashboard/DailyTrafficSkeleton';
import { IoMdArrowDropup } from 'react-icons/io';
import { Suspense } from 'react';
import styles from './DashboardDailyTraffic.module.css';

const DashboardDailyTraffic = () => {
  return (
    <Container className={styles.container}>
      <Container.Header
        StartContent={StartContent}
        EndContent={EndContent}
        className={`${styles.header}`}
      />

      <DailyTrafficChart />
    </Container>
  );
};

export default DashboardDailyTraffic;

function StartContent() {
  return (
    <div className={styles.headerLeftCol}>
      <p className={styles.title}>Daily Traffic</p>
      <p className={styles.visitorsCount}>
        2.579 <span className={styles.visitorsCountSubtitle}>Visitors</span>
      </p>
    </div>
  );
}

function EndContent() {
  return (
    <div className={`${styles.endContent}`}>
      <IoMdArrowDropup className={styles.endContentIcon} />
      <p className={styles.endContentPercentage}>+2.45%</p>
    </div>
  );
}
