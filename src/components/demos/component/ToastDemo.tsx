import type { DemoProps } from '../../../types';
import styles from './ToastDemo.module.css';

export function ToastDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.app}>
        <div className={styles.row} />
        <div className={styles.row} />
      </div>
      <div className={styles.toast}>
        <span className={styles.check}>✓</span>
        <span>保存しました</span>
      </div>
    </div>
  );
}
