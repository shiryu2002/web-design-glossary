import type { DemoProps } from '../../../types';
import styles from './DiagonalSplitDemo.module.css';

export function DiagonalSplitDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.left}>
        <div className={styles.label}>Left</div>
      </div>
      <div className={styles.right}>
        <div className={styles.label}>Right</div>
      </div>
    </div>
  );
}
