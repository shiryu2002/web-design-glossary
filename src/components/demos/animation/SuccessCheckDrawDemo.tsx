import type { DemoProps } from '../../../types';
import styles from './SuccessCheckDrawDemo.module.css';

export function SuccessCheckDrawDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <svg viewBox="0 0 80 80" className={styles.svg}>
        <circle cx="40" cy="40" r="34" className={styles.circle} />
        <polyline points="24,42 36,54 58,30" className={styles.check} />
      </svg>
    </div>
  );
}
