import { Button, Tooltip } from '@heroui/react';

import { CiHeart } from 'react-icons/ci';
import Container from 'apps/frontend/src/shared/components/common/Container';
import Image from 'next/image';
import { LuBrain } from 'react-icons/lu';
import styles from './ProductsGrid.module.css';

const ProductsGrid = () => {
  return (
    <div className={`${styles.productsGrid}`}>
      {Array.from({ length: 10 }).map((_, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  );
};

export default ProductsGrid;

function ProductCard() {
  return (
    <Container className={`${styles.productCard}`}>
      <div className={`${styles.productCardImage}`}>
        <div className={`${styles.productCardImageOverlay}`}>
          <div className={`${styles.cardActions}`}>
            <button className={`${styles.cardActionButton}`}>
              <CiHeart className={`${styles.cardActionIcon}`} />
            </button>
          </div>

          <Tooltip content="Оценка товара от ИИ: 4.5" color="primary">
            <div className={`${styles.aiRate}`}>
              <div className={`${styles.aiRateIcon}`}>
                <LuBrain />
              </div>
              <p>4.5</p>
            </div>
          </Tooltip>
        </div>
      </div>

      <div className={`${styles.productContent}`}>
        <p className={`${styles.productCardTitle}`}>
          Product Title Product Title Product Title
        </p>

        <p className={`${styles.whoAdded}`}>
          Добавил: <span>John Doe</span>
        </p>

        <div className={`${styles.footer}`}>
          <p className={`${styles.productCardPrice}`}>1000₽</p>

          <Button className={`${styles.viewDetailsButton}`}>Подробнее</Button>
        </div>
      </div>
    </Container>
  );
}
