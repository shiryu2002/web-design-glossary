import type { DemoProps } from '../../../types';
import styles from './DohertyThresholdDemo.module.css';

export function DohertyThresholdDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.bar}>
        <div className={styles.zone} />
        <div className={styles.marker} style={{ left: '40%' }}>
          <span className={styles.markerLabel}>400ms</span>
        </div>
      </div>
      <div className={styles.scale}>
        <span>0</span>
        <span>500</span>
        <span>1000ms</span>
      </div>
      <div className={styles.title}>応答 ≤ 400ms で集中が途切れない</div>
    </div>
  );
}
