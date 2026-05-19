import type { DemoProps } from '../../../types';
import styles from './ProgressBarDemo.module.css';

export function ProgressBarDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <div className={styles.label}>Determinate</div>
        <div className={styles.track}>
          <div className={styles.fill} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>Indeterminate</div>
        <div className={styles.track}>
          <div className={styles.indet} />
        </div>
      </div>
    </div>
  );
}
