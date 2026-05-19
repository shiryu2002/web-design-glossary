import type { DemoProps } from '../../../types';
import styles from './CognitiveLoadDemo.module.css';

export function CognitiveLoadDemo({ mode = 'after' }: DemoProps) {
  const heavy = mode === 'before';
  return (
    <div className={styles.stage}>
      <div className={heavy ? styles.dense : styles.minimal}>
        {heavy ? (
          <>
            <div className={styles.row}>名前 *</div>
            <div className={styles.row}>メール *</div>
            <div className={styles.row}>電話 *</div>
            <div className={styles.row}>住所 *</div>
            <div className={styles.row}>勤務先 *</div>
            <div className={styles.row}>役職 *</div>
            <div className={styles.row}>備考</div>
          </>
        ) : (
          <>
            <div className={styles.row}>メール</div>
            <div className={styles.row}>パスワード</div>
          </>
        )}
      </div>
    </div>
  );
}
