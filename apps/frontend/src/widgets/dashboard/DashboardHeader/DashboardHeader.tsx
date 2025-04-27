import Breadcrumbs from 'apps/frontend/src/shared/components/common/Breadcrums/Breadcrumbs';
import HeaderSearch from 'apps/frontend/src/shared/components/common/HeaderSearch/HeaderSearch';
import styles from './DashboardHeader.module.css';

interface Props {
  breadcrumbs: {
    label: string;
    href: string;
  }[];
  title: string;
}

const DashboardHeader = ({ breadcrumbs, title }: Props) => {
  return (
    <header className={`${styles.dashboardHeader}`}>
      <div className={`${styles.header}`}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <h1 className={`${styles.title}`}>{title}</h1>
      </div>
      <div className={`${styles.rightCol}`}>
        <HeaderSearch />
      </div>
    </header>
  );
};

export default DashboardHeader;
