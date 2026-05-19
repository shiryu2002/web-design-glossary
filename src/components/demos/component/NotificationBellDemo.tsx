import type { DemoProps } from '../../../types';
import styles from './NotificationBellDemo.module.css';

export function NotificationBellDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.wrap}>
        <span className={styles.bell}>🔔</span>
        <span className={styles.badge}>3</span>
      </div>
    </div>
  );
}
