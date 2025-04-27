import Header from 'apps/frontend/src/widgets/dashboard/DashboardHeader';
import ProductsLastActivity from 'apps/frontend/src/shared/components/products/ProductsLastActivity';
import ProductsList from 'apps/frontend/src/widgets/products/ProductsList';
import ProductsTopContent from 'apps/frontend/src/widgets/products/ProductsTopContent';
import ProductsTopSold from 'apps/frontend/src/shared/components/products/ProductsTopSold';
import styles from './Products.module.css';

export default function ProductsPage() {
  return (
    <main className={`${styles.products}`}>
      <Header breadcrumbs={breadcrumbs} title="Ваши товары" />

      <div className={`${styles.productsContent}`}>
        <div className={`${styles.leftCol}`}>
          <ProductsTopContent />

          <div className={`${styles.products}`}>
            <ProductsList />
          </div>
        </div>

        <div className={`${styles.rightCol}`}>
          <ProductsTopSold />
          <ProductsLastActivity />
        </div>
      </div>
    </main>
  );
}

const breadcrumbs = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Products', href: '/products' },
];
