import type { DemoProps } from '../../../types';
import styles from './FPatternDemo.module.css';

export function FPatternDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={`${styles.row} ${styles.long}`} />
      <div className={`${styles.row} ${styles.mid}`} />
      <div className={`${styles.row} ${styles.short}`} />
      <div className={`${styles.row} ${styles.veryShort}`} />
      <div className={`${styles.row} ${styles.veryShort}`} />
      <svg className={styles.path} viewBox="0 0 200 120" preserveAspectRatio="none">
        <polyline
          points="10,18 190,18 10,40 130,40 10,62 10,90"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="5 5"
        />
      </svg>
    </div>
  );
}
