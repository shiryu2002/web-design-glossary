import type { DemoProps } from '../../../types';
import styles from './StatCardDemo.module.css';

export function StatCardDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.card}>
        <div className={styles.label}>月間アクティブユーザー</div>
        <div className={styles.num}>12,345</div>
        <div className={styles.delta}>↑ 12.5% 前月比</div>
      </div>
    </div>
  );
}
