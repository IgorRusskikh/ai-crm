'use client';

import {
  ScrollShadow,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';

import Container from 'apps/frontend/src/shared/components/common/Container';
import styles from './DashboardGenerationHistory.module.css';

const DashboardGenerationHistory = () => {
  return (
    <Container className={styles.container}>
      <Container.Header title="Generation History" />

      <Table
        aria-label="Generation history"
        classNames={{ wrapper: styles.wrapper, tr: styles.tr }}
      >
        <TableHeader>
          <TableColumn>Назване товара</TableColumn>
          <TableColumn>Цена</TableColumn>
          <TableColumn>Статус</TableColumn>
          <TableColumn>Дата</TableColumn>
        </TableHeader>

        <TableBody>
          {Array.from({ length: 10 }).map((_, index) => (
            <TableRow>
              <TableCell>Tony Reichert</TableCell>
              <TableCell>Tony Reichert</TableCell>
              <TableCell>Tony Reichert</TableCell>
              <TableCell>Tony Reichert</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default DashboardGenerationHistory;
