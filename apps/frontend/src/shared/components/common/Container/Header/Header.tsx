import { ElementType, HTMLAttributes } from 'react';

import { IconType } from 'react-icons/lib';
import styles from './Header.module.css';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  StartContent?: ElementType;
  Icon?: IconType;
  EndContent?: ElementType;
}

const Header = ({
  title,
  StartContent,
  Icon,
  EndContent,
  className,
  ...props
}: IProps) => {
  return (
    <div className={`${styles.header} ${className}`} {...props}>
      {title && !StartContent && <h3 className={`${styles.title}`}>{title}</h3>}
      {StartContent && !title && <StartContent />}

      {Icon && !EndContent && (
        <div className={`${styles.iconContainer}`}>
          <Icon className={`${styles.icon}`} />
        </div>
      )}
      {EndContent && !Icon && <EndContent />}
    </div>
  );
};

export default Header;
