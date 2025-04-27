import { Button } from '@heroui/button';
import Container from 'apps/frontend/src/shared/components/common/Container';
import { LuBrain } from 'react-icons/lu';
import { ScrollShadow } from '@heroui/scroll-shadow';
import styles from './DashboardAiOffers.module.css';

const DashboardAiOffers = () => {
  return (
    <Container>
      <Container.Header title="AI предлагает улучшения" Icon={LuBrain} />

      <ScrollShadow className={`${styles.offers}`}>
        <OfferItem />
        <OfferItem />
        <OfferItem />
        <OfferItem />
      </ScrollShadow>
    </Container>
  );
};

export default DashboardAiOffers;

function OfferItem() {
  return (
    <div className={`${styles.offerItem}`}>
      <div className={`${styles.header}`}>
        <div className={`${styles.image}`}></div>

        <div className={`${styles.info}`}>
          <p className={`${styles.title}`}>Название</p>
          <p className={`${styles.description}`}>Описание</p>
        </div>
      </div>

      <div className={`${styles.content}`}>
        <Button className={`${styles.increaseButton}`}>
          Улучшить с помощью AI
        </Button>

        <p className={`${styles.contentDescription}`}>Предложено 2 дня назад</p>
      </div>
    </div>
  );
}
