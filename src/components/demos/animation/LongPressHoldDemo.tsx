import type { DemoProps } from '../../../types';
import styles from './LongPressHoldDemo.module.css';

export function LongPressHoldDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.btn}>
        <svg viewBox="0 0 60 60" className={styles.ring}>
          <circle cx="30" cy="30" r="26" className={styles.track} />
          <circle cx="30" cy="30" r="26" className={styles.fill} />
        </svg>
        <span className={styles.label}>HOLD</span>
      </div>
    </div>
  );
}
