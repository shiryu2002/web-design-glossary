import type { DemoProps } from '../../../types';
import styles from './FloatingActionBarDemo.module.css';

export function FloatingActionBarDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.canvas}>
        <div className={styles.placeholder}>Page</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.btn}>↶</div>
        <div className={styles.btn}>↷</div>
        <div className={styles.sep} />
        <div className={styles.btn}>✎</div>
        <div className={styles.btn}>★</div>
        <div className={`${styles.btn} ${styles.primary}`}>＋</div>
      </div>
    </div>
  );
}
