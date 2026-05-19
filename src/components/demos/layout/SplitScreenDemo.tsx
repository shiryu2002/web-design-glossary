import type { DemoProps } from '../../../types';
import styles from './SplitScreenDemo.module.css';

export function SplitScreenDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.left}>
        <div className={styles.icon}>◐</div>
        <div className={styles.label}>Left</div>
      </div>
      <div className={styles.right}>
        <div className={styles.icon}>◑</div>
        <div className={styles.label}>Right</div>
      </div>
    </div>
  );
}
