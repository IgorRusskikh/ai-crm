import Container from '../../common/Container';
import Link from 'next/link';
import styles from './ProductsTopSold.module.css';
const ProductsTopSold = () => {
  return (
    <Container>
      <Container.Header title="Самые продаваемые товары" />

      <div className={`${styles.productsTopSold}`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductsTopSoldItem key={index} />
        ))}
      </div>
    </Container>
  );
};

export default ProductsTopSold;

const ProductsTopSoldItem = () => {
  return (
    <Link href="#" className={`${styles.productsTopSoldItem}`}>
      <div className={`${styles.productInfo}`}>
        <div className={`${styles.productImage}`}></div>
        <p className={`${styles.productTitle}`}>Product title</p>
      </div>

      <div className={`${styles.soldCount}`}>
        <p className={`${styles.soldCountValue}`}>1000</p>
      </div>
    </Link>
  );
};
