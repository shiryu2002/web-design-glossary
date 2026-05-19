import type { DemoProps } from '../../../types';
import styles from './PaginationDemo.module.css';

export function PaginationDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.bar}>
        <span className={styles.arrow}>‹</span>
        <span className={styles.num}>1</span>
        <span className={`${styles.num} ${styles.active}`}>2</span>
        <span className={styles.num}>3</span>
        <span className={styles.dots}>…</span>
        <span className={styles.num}>9</span>
        <span className={styles.arrow}>›</span>
      </div>
    </div>
  );
}
