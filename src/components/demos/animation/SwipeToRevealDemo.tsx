import type { DemoProps } from '../../../types';
import styles from './SwipeToRevealDemo.module.css';

export function SwipeToRevealDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <div className={styles.actions}>
          <span className={styles.btn} style={{ background: '#f7a23a' }}>Edit</span>
          <span className={styles.btn} style={{ background: '#e15a5a' }}>Del</span>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>Message</span>
          <span className={styles.sub}>tap to open</span>
        </div>
      </div>
    </div>
  );
}
