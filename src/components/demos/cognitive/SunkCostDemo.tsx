import type { DemoProps } from '../../../types';
import styles from './SunkCostDemo.module.css';

export function SunkCostDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.label}>登録 80% 完了</div>
      <div className={styles.bar}><div className={styles.fill} /></div>
      <div className={styles.modal}>離脱しますか？</div>
      <div className={styles.btnRow}>
        <span className={styles.btnCancel}>続ける</span>
        <span className={styles.btnLeave}>離脱</span>
      </div>
    </div>
  );
}
