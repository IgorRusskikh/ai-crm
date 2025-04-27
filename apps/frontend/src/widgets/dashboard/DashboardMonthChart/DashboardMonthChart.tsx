'use client';

import { Select, SelectItem } from '@heroui/react';
import { useEffect, useState } from 'react';

import { CgLoadbarSound } from 'react-icons/cg';
import Container from 'apps/frontend/src/shared/components/common/Container';
import { FaRegCalendar } from 'react-icons/fa';
import MonthChart from 'apps/frontend/src/shared/components/dashboard/MonthChart';
import MonthChartData from 'apps/frontend/src/shared/components/dashboard/MonthChartData';
import MonthChartDataSkeleton from 'apps/frontend/src/shared/skeletons/dashboard/MonthChartDataSkeleton';
import MonthChartSkeleton from 'apps/frontend/src/shared/skeletons/dashboard/MonthChart';
import styles from './DashboardMonthChart.module.css';

const DashboardMonthChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Container>
      <Container.Header StartContent={StartContent} Icon={CgLoadbarSound} />

      <div className={`${styles.content}`}>
        {isClient ? (
          <MonthChartData totalAmount={37} prevTotalAmount={35} />
        ) : (
          <MonthChartDataSkeleton />
        )}

        {isClient ? (
          <MonthChart data={monthChartData} />
        ) : (
          <MonthChartSkeleton />
        )}
      </div>
    </Container>
  );
};

export default DashboardMonthChart;

const StartContent = () => {
  return (
    <Select
      startContent={<FaRegCalendar className={`${styles.calendarIcon}`} />}
      defaultSelectedKeys={['month']}
      classNames={{
        mainWrapper: styles.headerSelectWrapper,
        trigger: styles.headerSelectTrigger,
      }}
    >
      {selectOptions.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

const selectOptions = [
  { label: 'Неделя', key: 'week' },
  { label: 'Месяц', key: 'month' },
  { label: '6 Месяцев', key: 'half-year' },
  { label: 'Год', key: 'year' },
];

const monthChartData = [
  { month: 'SEP', topAmount: 90, bottomAmount: 70 },
  { month: 'OCT', topAmount: 80, bottomAmount: 50 },
  { month: 'NOV', topAmount: 108, bottomAmount: 80 },
  { month: 'DEC', topAmount: 85, bottomAmount: 60 },
  { month: 'JAN', topAmount: 110, bottomAmount: 75 },
  { month: 'FEB', topAmount: 115, bottomAmount: 90 },
];
