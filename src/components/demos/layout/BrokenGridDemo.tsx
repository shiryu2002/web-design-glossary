import type { DemoProps } from '../../../types';
import styles from './BrokenGridDemo.module.css';

export function BrokenGridDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.grid}>
        <div className={`${styles.cell} ${styles.c1}`}>01</div>
        <div className={`${styles.cell} ${styles.c2}`}>02</div>
        <div className={`${styles.cell} ${styles.c3}`}>03</div>
        <div className={`${styles.cell} ${styles.c4}`}>04</div>
        <div className={`${styles.cell} ${styles.c5}`}>05</div>
      </div>
    </div>
  );
}
