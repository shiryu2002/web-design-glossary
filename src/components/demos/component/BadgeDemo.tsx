import type { DemoProps } from '../../../types';
import styles from './BadgeDemo.module.css';

export function BadgeDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.iconWrap}>
        <div className={styles.icon}>✉</div>
        <span className={styles.badge}>12</span>
      </div>
      <div className={styles.iconWrap}>
        <div className={styles.icon}>🔔</div>
        <span className={`${styles.badge} ${styles.dot}`} />
      </div>
      <div className={styles.iconWrap}>
        <div className={styles.icon}>👤</div>
        <span className={styles.badge}>NEW</span>
      </div>
    </div>
  );
}
