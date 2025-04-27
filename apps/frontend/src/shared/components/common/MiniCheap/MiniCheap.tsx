import styles from './MiniCheap.module.css';

interface Props {
  Icon: React.ElementType;
  title: string;
  content: string;
}

const MiniCheap = ({ Icon, title, content }: Props) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.iconContainer}`}>
        <Icon className={`${styles.icon}`} />
      </div>

      <div className={`${styles.contentContainer}`}>
        <h3 className={`${styles.title}`}>{title}</h3>
        <p className={`${styles.content}`}>{content}</p>
      </div>
    </div>
  );
};

export default MiniCheap;
