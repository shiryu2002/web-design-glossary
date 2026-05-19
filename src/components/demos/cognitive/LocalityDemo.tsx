import type { DemoProps } from '../../../types';
import styles from './LocalityDemo.module.css';

export function LocalityDemo({ mode = 'after' }: DemoProps) {
  if (mode === 'before') {
    return (
      <div className={styles.stage}>
        <div className={styles.alertTop}>! 入力にエラーがあります</div>
        <div className={styles.field}>メール</div>
        <div className={styles.field}>パスワード</div>
      </div>
    );
  }
  return (
    <div className={styles.stage}>
      <div className={styles.field}>メール</div>
      <div className={styles.error}>! 正しい形式で</div>
      <div className={styles.field}>パスワード</div>
    </div>
  );
}
