import type { DemoProps } from '../../../types';
import styles from './ZeigarnikDemo.module.css';

export function ZeigarnikDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.list}>
        <div className={`${styles.item} ${styles.done}`}>
          <span className={styles.check}>✓</span>
          <span className={styles.text}>デザイン案</span>
        </div>
        <div className={`${styles.item} ${styles.done}`}>
          <span className={styles.check}>✓</span>
          <span className={styles.text}>実装</span>
        </div>
        <div className={`${styles.item} ${styles.todo}`}>
          <span className={styles.box} />
          <span className={styles.text}>テスト</span>
          <span className={styles.nudge}>未完了</span>
        </div>
        <div className={`${styles.item} ${styles.done}`}>
          <span className={styles.check}>✓</span>
          <span className={styles.text}>ドキュメント</span>
        </div>
      </div>
    </div>
  );
}
