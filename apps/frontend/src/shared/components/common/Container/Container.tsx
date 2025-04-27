import Header from './Header';
import styles from './Container.module.css';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = ({ children, className, ...props }: IProps) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  );
};

Container.Header = Header;

export default Container;
