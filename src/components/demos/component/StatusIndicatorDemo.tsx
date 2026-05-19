import type { DemoProps } from '../../../types';
import styles from './StatusIndicatorDemo.module.css';

export function StatusIndicatorDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <span className={`${styles.dot} ${styles.online}`} />
        <span>Online</span>
      </div>
      <div className={styles.row}>
        <span className={`${styles.dot} ${styles.away}`} />
        <span>Away</span>
      </div>
      <div className={styles.row}>
        <span className={`${styles.dot} ${styles.busy}`} />
        <span>Busy</span>
      </div>
      <div className={styles.row}>
        <span className={`${styles.dot} ${styles.offline}`} />
        <span>Offline</span>
      </div>
    </div>
  );
}
