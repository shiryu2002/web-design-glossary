import type { DemoProps } from '../../../types';
import styles from './PullToRefreshDemo.module.css';

export function PullToRefreshDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.viewport}>
        <div className={styles.spinner} />
        <div className={styles.content}>
          <div className={styles.row} />
          <div className={styles.row} />
          <div className={styles.row} />
        </div>
      </div>
    </div>
  );
}
