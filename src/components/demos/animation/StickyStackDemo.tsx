import type { DemoProps } from '../../../types';
import styles from './StickyStackDemo.module.css';

export function StickyStackDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={`${styles.card} ${styles.c1}`}>A</div>
      <div className={`${styles.card} ${styles.c2}`}>B</div>
      <div className={`${styles.card} ${styles.c3}`}>C</div>
      <div className={`${styles.card} ${styles.c4}`}>D</div>
    </div>
  );
}
