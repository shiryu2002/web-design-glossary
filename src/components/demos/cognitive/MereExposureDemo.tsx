import type { DemoProps } from '../../../types';
import styles from './MereExposureDemo.module.css';

export function MereExposureDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={styles.logo}>◆</span>
        ))}
      </div>
      <div className={styles.label}>接触回数 → 好感度UP</div>
    </div>
  );
}
