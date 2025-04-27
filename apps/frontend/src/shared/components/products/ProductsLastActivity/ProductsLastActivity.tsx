import Container from '../../common/Container';
import styles from './ProductsLastActivity.module.css';

const ProductsLastActivity = () => {
  return (
    <Container>
      <Container.Header title="Последние генерации" />

      <div className={`${styles.productsLastActivity}`}>
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductsLastActivityItem key={index} />
        ))}
      </div>
    </Container>
  );
};

export default ProductsLastActivity;

function ProductsLastActivityItem() {
  return (
    <div className={`${styles.productsLastActivityItem}`}>
      <div className={`${styles.productInfo}`}>
        <div className={`${styles.productsLastActivityItemImage}`}></div>
        <p className={`${styles.productTitle}`}>Product title</p>
      </div>

      <div className={`${styles.time}`}>
        <p className={`${styles.timeValue}`}>5 мин. назад</p>
      </div>
    </div>
  );
}
