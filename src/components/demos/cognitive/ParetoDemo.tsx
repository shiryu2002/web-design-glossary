import type { DemoProps } from '../../../types';
import styles from './ParetoDemo.module.css';

export function ParetoDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <div className={styles.big}>20%</div>
        <div className={styles.label}>機能</div>
      </div>
      <div className={styles.arrow}>→</div>
      <div className={styles.row}>
        <div className={styles.bigHi}>80%</div>
        <div className={styles.label}>利用</div>
      </div>
    </div>
  );
}
