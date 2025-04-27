import { CgLoadbarSound } from 'react-icons/cg';
import MiniCheap from 'apps/frontend/src/shared/components/common/MiniCheap';
import styles from './DashboardHeaderCheaps.module.css';

const DashboardHeaderCheaps = () => {
  return (
    <div className={`${styles.dashboardHeaderCheaps}`}>
      <MiniCheap Icon={CgLoadbarSound} title="Title" content="Content" />
      <MiniCheap Icon={CgLoadbarSound} title="Title" content="Content" />
      <MiniCheap Icon={CgLoadbarSound} title="Title" content="Content" />
      <MiniCheap Icon={CgLoadbarSound} title="Title" content="Content" />
      <MiniCheap Icon={CgLoadbarSound} title="Title" content="Content" />
      <MiniCheap Icon={CgLoadbarSound} title="Title" content="Content" />
    </div>
  );
};

export default DashboardHeaderCheaps;
