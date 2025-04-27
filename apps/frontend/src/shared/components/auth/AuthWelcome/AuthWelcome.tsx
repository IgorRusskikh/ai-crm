import { FaStore } from 'react-icons/fa';
import Image from 'next/image';
import styles from './AuthWelcome.module.css';

const AuthWelcome = () => {
  return (
    <div className={styles.authWelcome}>
      <div className={`${styles.welcomeContent}`}>
        <div className={`${styles.logo}`}>
          <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
        </div>

        <div className={`${styles.welcomeContentHeader}`}>
          <h1>NeoStore</h1>
          <FaStore className={`${styles.icon}`} />
        </div>

        <div className={`${styles.welcomeContentText}`}>
          <h3>Превращаем маркетплейсы в ваш главный канал продаж</h3>
        </div>
      </div>
    </div>
  );
};

export default AuthWelcome;
