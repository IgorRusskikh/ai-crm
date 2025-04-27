import { Button } from '@heroui/button';
import styles from './ProductsTopContent.module.css';

const ProductsTopContent = () => {
  return (
    <div className={`${styles.productsTopContentActions}`}>
      <Button className={`${styles.productsTopContentButton}`}>
        Добавить товар
      </Button>
    </div>
  );
};

export default ProductsTopContent;
