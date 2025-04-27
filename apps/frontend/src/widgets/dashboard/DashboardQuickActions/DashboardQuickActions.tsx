import { Button } from '@heroui/button';
import { CiShoppingCart } from 'react-icons/ci';
import Container from 'apps/frontend/src/shared/components/common/Container';
import { IoIosSync } from 'react-icons/io';
import styles from './DashboardQuickActions.module.css';

const DashboardQuickActions = () => {
  return (
    <Container>
      <Container.Header title="Быстрые действия" />

      <div className={`${styles.quickActions}`}>
        {action.map((item) => (
          <Button className={`${styles.quickAction}`}>
            <item.Icon className={`${styles.quickActionIcon}`} />
            <p className={`${styles.quickActionTitle}`}>{item.title}</p>
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default DashboardQuickActions;

const action = [
  {
    Icon: IoIosSync,
    title: 'Синхронизировать товары',
  },
  {
    Icon: CiShoppingCart,
    title: 'Сгенерировать товар',
  },
];
