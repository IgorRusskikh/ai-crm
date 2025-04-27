import ProductsFilters from 'apps/frontend/src/shared/components/products/ProductsFilters';
import ProductsGrid from '../ProductsGrid';
import styles from './ProductsList.module.css';

const ProductsList = () => {
  return (
    <div className={`${styles.productsList}`}>
      <ProductsFilters />
      <ProductsGrid />
    </div>
  );
};

export default ProductsList;
