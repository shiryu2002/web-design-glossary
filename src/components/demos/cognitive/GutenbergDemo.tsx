import type { DemoProps } from '../../../types';
import styles from './GutenbergDemo.module.css';

export function GutenbergDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={`${styles.q} ${styles.primary}`}>
        <span className={styles.label}>Primary</span>
      </div>
      <div className={`${styles.q} ${styles.strong}`}>
        <span className={styles.label}>Strong fallow</span>
      </div>
      <div className={`${styles.q} ${styles.weak}`}>
        <span className={styles.label}>Weak fallow</span>
      </div>
      <div className={`${styles.q} ${styles.terminal}`}>
        <span className={styles.label}>Terminal</span>
      </div>
      <svg className={styles.arrow} viewBox="0 0 200 120" preserveAspectRatio="none">
        <line
          x1="20" y1="22" x2="180" y2="98"
          stroke="var(--accent)" strokeWidth="3"
          strokeLinecap="round" strokeDasharray="6 5"
        />
        <polygon points="180,98 168,90 170,102" fill="var(--accent)" />
      </svg>
    </div>
  );
}
