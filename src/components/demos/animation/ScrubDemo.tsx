import type { DemoProps } from '../../../types';
import styles from './ScrubDemo.module.css';

export function ScrubDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.timeline}>
        <div className={styles.played} />
        <span className={styles.head} />
      </div>
      <div className={styles.scene}>
        <div className={styles.sun} />
      </div>
    </div>
  );
}
