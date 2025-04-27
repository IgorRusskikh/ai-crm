import { FaMoon } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import Image from 'next/image';
import { Input } from '@heroui/input';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import styles from './HeaderSearch.module.css';

const HeaderSearch = () => {
  return (
    <div className={`${styles.container}`}>
      <Input
        classNames={{
          inputWrapper: styles.inputWrapper,
        }}
        placeholder="Поиск"
        startContent={<IoSearch className={`${styles.searchIcon}`} />}
      />

      <button className={`${styles.iconButton}`}>
        <IoMdNotificationsOutline className={`${styles.icon}`} />
      </button>
      <button className={`${styles.iconButton}`}>
        <FaMoon className={`${styles.icon}`} />
      </button>
      <button className={`${styles.iconButton}`}>
        <FiInfo className={`${styles.icon}`} />
      </button>

      <div className={`${styles.avatar}`}>
        {/* <Image
          className={`${styles.avatarImage}`}
          src="/images/avatar.png"
          alt="avatar"
          fill
        /> */}
      </div>
    </div>
  );
};

export default HeaderSearch;
