import Link from 'next/link';
import styles from './Breadcrumbs.module.css';

interface Props {
  breadcrumbs: {
    label: string;
    href: string;
  }[];
}

const Breadcrumbs = ({ breadcrumbs }: Props) => {
  return (
    <div className={`${styles.breadcrumbs}`}>
      {breadcrumbs.map((breadcrumb, index, array) => (
        <div key={breadcrumb.href}>
          <Link href={breadcrumb.href} className={`${styles.link}`}>
            {breadcrumb.label}
          </Link>
          {index !== array.length - 1 && <span> / </span>}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
