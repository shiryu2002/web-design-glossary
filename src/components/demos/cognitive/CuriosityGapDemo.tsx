import type { DemoProps } from '../../../types';
import styles from './CuriosityGapDemo.module.css';

export function CuriosityGapDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={styles.headline}>「9割の人が知らない」</div>
        <div className={styles.blurred}>その答えは....</div>
        <div className={styles.cta}>続きを読む →</div>
      </div>
    </div>
  );
}
