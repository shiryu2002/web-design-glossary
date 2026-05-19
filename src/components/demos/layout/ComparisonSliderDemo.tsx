import type { DemoProps } from '../../../types';
import styles from './ComparisonSliderDemo.module.css';

export function ComparisonSliderDemo({ mode = 'after' }: DemoProps) {
  const pos = mode === 'after' ? 70 : 30;
  return (
    <div className={styles.stage}>
      <div className={styles.frame}>
        <div className={styles.before}>BEFORE</div>
        <div className={styles.after} style={{ width: `${pos}%` }}>
          <div className={styles.afterInner}>AFTER</div>
        </div>
        <div className={styles.divider} style={{ left: `${pos}%` }}>
          <div className={styles.handle}>‖</div>
        </div>
      </div>
    </div>
  );
}
