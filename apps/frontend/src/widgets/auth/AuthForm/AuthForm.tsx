'use client';

import { LuEye, LuEyeOff } from 'react-icons/lu';

import { Button } from '@heroui/button';
import { Checkbox } from '@heroui/checkbox';
import { Input } from '@heroui/input';
import styles from './AuthForm.module.css';
import { useState } from 'react';

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.container}>
      <div className={`${styles.formHeader}`}>
        <h2 className={styles.title}>Sign in</h2>
        <p>Enter your email and password to sign in!</p>
      </div>

      <form action="" className={styles.form}>
        <fieldset className={styles.fieldset}>
          <Input
            type="email"
            placeholder="mail@simmmple.com"
            label="Email"
            labelPlacement="outside"
            isRequired
            classNames={{
              input: styles.input,
              inputWrapper: styles.inputWrapper,
            }}
          />

          <Input
            type="password"
            placeholder="Min. 8 characters"
            label="Password"
            labelPlacement="outside"
            isRequired
            classNames={{
              input: styles.input,
              inputWrapper: styles.inputWrapper,
            }}
            endContent={
              <PasswordEndContent
                showPassword={showPassword}
                onClick={(evt) => {
                  setShowPassword(!showPassword);
                }}
              />
            }
          />
        </fieldset>

        <div className={`${styles.formFooter}`}>
          <Checkbox
            defaultSelected
            classNames={{
              label: styles.keepMeLoggedInLabel,
            }}
          >
            Keep me logged in
          </Checkbox>
          <button className={styles.forgetPassword}>Forget password?</button>
        </div>

        <Button className={styles.signInButton}>Sign in</Button>
      </form>

      <div className={`${styles.createAccount}`}>
        <span>Don&apos;t have an account?</span>{' '}
        <button className={styles.createAccountButton}>Create account</button>
      </div>
    </div>
  );
};

export default AuthForm;

interface PasswordEndContentProps {
  showPassword: boolean;
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

function PasswordEndContent({
  showPassword,
  onClick,
}: PasswordEndContentProps) {
  return (
    <button onClick={onClick} className={styles.passwordEndContent}>
      {showPassword ? (
        <LuEye className={`${styles.passwordEndContentIcon}`} />
      ) : (
        <LuEyeOff className={`${styles.passwordEndContentIcon}`} />
      )}
    </button>
  );
}
