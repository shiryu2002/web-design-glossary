import type { DemoProps } from '../../../types';
import styles from './EmptyStateDemo.module.css';

export function EmptyStateDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.icon}>📭</div>
      <div className={styles.title}>まだ何もありません</div>
      <div className={styles.sub}>最初の1件を作ってみよう</div>
      <div className={styles.btn}>+ 新規作成</div>
    </div>
  );
}
