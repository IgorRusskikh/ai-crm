import Container from 'apps/frontend/src/shared/components/common/Container';
import { FaPlusCircle } from 'react-icons/fa';
import { ScrollShadow } from '@heroui/scroll-shadow';
import { SlOptionsVertical } from 'react-icons/sl';
import styles from './DashboardStoreMembers.module.css';

const DashboardStoreMembers = () => {
  return (
    <Container className={`${styles.container}`}>
      <Container.Header
        StartContent={StartContent}
        EndContent={EndContent}
        className={`${styles.header}`}
      />

      <ScrollShadow className={`${styles.members}`}>
        <MemberItem />
        <MemberItem />
        <MemberItem />
        <MemberItem />
        <MemberItem />
        <MemberItem />
      </ScrollShadow>
    </Container>
  );
};

export default DashboardStoreMembers;

function StartContent() {
  return <h3 className={`${styles.startContent}`}>Участники команды</h3>;
}

function EndContent() {
  return (
    <button className={`${styles.endContent}`}>
      <FaPlusCircle className={`${styles.endContentIcon}`} />
    </button>
  );
}

function MemberItem() {
  return (
    <div className={`${styles.memberItem}`}>
      <div className={`${styles.memberItemContent}`}>
        <div className={`${styles.memberItemAvatar}`}></div>

        <div className={`${styles.memberItemInfo}`}>
          <p className={`${styles.memberItemName}`}>Имя Фамилия</p>
          <p className={`${styles.memberItemRole}`}>Роль</p>
        </div>
      </div>

      <div className={`${styles.memberItemActions}`}>
        <button className={`${styles.memberItemAction}`}>
          <SlOptionsVertical className={`${styles.memberItemActionIcon}`} />
        </button>
      </div>
    </div>
  );
}
