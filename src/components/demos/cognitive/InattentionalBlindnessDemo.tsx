import type { DemoProps } from '../../../types';
import styles from './InattentionalBlindnessDemo.module.css';

export function InattentionalBlindnessDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.main}>
        <div className={styles.bigText}>★</div>
      </div>
      <div className={styles.side}>
        <div className={styles.badge}>3</div>
      </div>
      <div className={styles.label}>視線が中央に集中 → 右上は見えない</div>
    </div>
  );
}
