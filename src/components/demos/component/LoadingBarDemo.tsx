import type { DemoProps } from '../../../types';
import styles from './LoadingBarDemo.module.css';

export function LoadingBarDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.bar} />
      <div className={styles.content}>
        <div className={styles.row} />
        <div className={styles.row} />
      </div>
    </div>
  );
}
