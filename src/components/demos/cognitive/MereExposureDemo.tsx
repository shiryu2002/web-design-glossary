import type { DemoProps } from '../../../types';
import styles from './MereExposureDemo.module.css';

export function MereExposureDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={styles.face}
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </div>
      <div className={styles.label}>接触回数 → 好印象</div>
    </div>
  );
}
