import type { DemoProps } from '../../../types';
import styles from './DohertyThresholdDemo.module.css';

export function DohertyThresholdDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <div className={styles.label}>400ms</div>
        <div className={styles.track}>
          <div className={`${styles.bar} ${styles.fast}`} />
        </div>
        <div className={`${styles.tag} ${styles.good}`}>快適</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>1000ms</div>
        <div className={styles.track}>
          <div className={`${styles.bar} ${styles.slow}`} />
        </div>
        <div className={`${styles.tag} ${styles.bad}`}>遅い</div>
      </div>
    </div>
  );
}
