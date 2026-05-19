import type { DemoProps } from '../../../types';
import styles from './ProgressRingDemo.module.css';

export function ProgressRingDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <svg className={styles.ring} viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="32" className={styles.track} />
        <circle cx="40" cy="40" r="32" className={styles.bar} />
      </svg>
    </div>
  );
}
