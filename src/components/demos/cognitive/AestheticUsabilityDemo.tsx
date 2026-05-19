import type { DemoProps } from '../../../types';
import styles from './AestheticUsabilityDemo.module.css';

export function AestheticUsabilityDemo({ mode = 'after' }: DemoProps) {
  const pretty = mode === 'after';
  return (
    <div className={styles.stage}>
      <div className={pretty ? styles.cardPretty : styles.cardUgly}>
        <div className={styles.title}>Submit</div>
        <div className={styles.btn}>続行</div>
      </div>
      <div className={styles.label}>
        {pretty ? 'キレイ → 使いやすく感じる' : '汚い → 使いにくく感じる'}
      </div>
    </div>
  );
}
