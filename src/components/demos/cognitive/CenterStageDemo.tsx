import type { DemoProps } from '../../../types';
import styles from './CenterStageDemo.module.css';

export function CenterStageDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.plan}>Basic</div>
      <div className={styles.planHi}>
        <div className={styles.badge}>おすすめ</div>
        Pro
      </div>
      <div className={styles.plan}>Team</div>
    </div>
  );
}
