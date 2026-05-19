import type { DemoProps } from '../../../types';
import styles from './InlineValidationDemo.module.css';

export function InlineValidationDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.field}>
        <div className={styles.label}>メール</div>
        <div className={`${styles.input} ${styles.ok}`}>
          alice@example.com
          <span className={styles.check}>✓</span>
        </div>
      </div>
      <div className={styles.field}>
        <div className={styles.label}>パスワード</div>
        <div className={`${styles.input} ${styles.error}`}>
          ab
          <span className={styles.warn}>!</span>
        </div>
        <div className={styles.errorText}>8文字以上で入力してください</div>
      </div>
    </div>
  );
}
