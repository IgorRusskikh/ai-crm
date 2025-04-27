import DashboardAiOffers from 'apps/frontend/src/widgets/dashboard/DashboardAiOffers';
import DashboardDailyTraffic from 'apps/frontend/src/widgets/dashboard/DashboardDailyTraffic';
import DashboardGenerationHistory from 'apps/frontend/src/widgets/dashboard/DashboardGenerationHistory';
import DashboardHeaderCheaps from 'apps/frontend/src/widgets/dashboard/DashboardHeaderCheaps';
import DashboardMonthChart from 'apps/frontend/src/widgets/dashboard/DashboardMonthChart';
import DashboardQuickActions from 'apps/frontend/src/widgets/dashboard/DashboardQuickActions';
import DashboardStoreMembers from 'apps/frontend/src/widgets/dashboard/DashboardStoreMembers';
import DashboardTasks from 'apps/frontend/src/widgets/dashboard/DashboardTasks';
import DashboardWeeklyRevenue from 'apps/frontend/src/widgets/dashboard/DashboardWeeklyRevenue/DashboardWeeklyRevenue';
import Header from 'apps/frontend/src/widgets/dashboard/DashboardHeader';
import styles from './Dashboard.module.css';

export default function DashboardPage() {
  return (
    <main className={`${styles.dashboard}`}>
      <Header
        breadcrumbs={[
          { label: 'Dashboard', href: '/' },
          { label: 'Projects', href: '/projects' },
        ]}
        title="Projects"
      />

      <div className={`${styles.dashboardContent}`}>
        <DashboardHeaderCheaps />

        <div className={`${styles.content}`}>
          <div className={`${styles.leftCol}`}>
            <DashboardMonthChart />
            <DashboardGenerationHistory />

            <div className={`${styles.doubleCols}`}>
              <DashboardStoreMembers />

              <DashboardTasks />
            </div>
          </div>

          <div className={`${styles.rightCol}`}>
            <DashboardWeeklyRevenue />

            <div className={`${styles.doubleCols}`}>
              <DashboardDailyTraffic />
              <DashboardQuickActions />
            </div>

            <DashboardAiOffers />
          </div>
        </div>
      </div>
    </main>
  );
}
