'use client';

import Link from 'next/link';
import { navigationLinks } from 'apps/frontend/src/config';
import styles from './Sidebar.module.css';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className={`${styles.sidebar}`}>
      <div className={`${styles.header}`}>
        <p className={`${styles.headerTitle}`}>
          NeoStore <span className={`${styles.headerTitleFree}`}>FREE</span>
        </p>
      </div>

      <hr className={`${styles.divider}`} />

      <div className={`${styles.menu}`}>
        <nav className={`${styles.menuNav}`}>
          <ul className={`${styles.menuList}`}>
            {navigationLinks.map((link) => (
              <li key={link.label} className={`${styles.menuItem}`}>
                <Link
                  href={link.href}
                  className={`${styles.menuItemLink} ${
                    isActive(link.href) ? styles.activeLink : styles.disabled
                  }`}
                >
                  <span
                    className={`${styles.menuItemIcon} ${
                      isActive(link.href) ? styles.activeIcon : styles.disabled
                    }`}
                  >
                    {link.icon}
                  </span>
                  <span className={`${styles.menuItemLabel}`}>
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`${styles.menuFooter}`}>
          <button className={`${styles.upgradeContainer}`}>
            <h3 className={`${styles.upgradeTitle}`}>Upgrade to PRO</h3>

            <p className={`${styles.upgradeDescription}`}>
              Получите больше функций искусственного интеллекта и моментальную
              поддержку!
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
