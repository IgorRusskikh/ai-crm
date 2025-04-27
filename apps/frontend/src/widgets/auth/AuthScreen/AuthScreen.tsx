import AuthWelcome from 'apps/frontend/src/shared/components/auth/AuthWelcome';
import Image from 'next/image';
import styles from './AuthScreen.module.css';

interface Props {
  children: React.ReactNode;
}

const AuthScreen = ({ children }: Props) => {
  return (
    <main className={styles.authScreen}>
      {children}
      <AuthWelcome />
      <div className={`${styles.bgWrapper}`}>
        <div className={`${styles.bg}`}>
          <Image
            src="/images/auth-background.png"
            fill
            alt="Welcome to ai crm"
            className={`${styles.bgImages}`}
            quality={70}
            priority
          />
        </div>
      </div>
    </main>
  );
};

export default AuthScreen;
