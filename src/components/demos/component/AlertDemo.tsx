import type { DemoProps } from '../../../types';
import styles from './AlertDemo.module.css';

export function AlertDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={`${styles.alert} ${styles.success}`}>
        <span className={styles.icon}>✓</span>
        <span className={styles.text}>保存しました。</span>
        <button className={styles.close}>×</button>
      </div>
      <div className={`${styles.alert} ${styles.warn}`}>
        <span className={styles.icon}>!</span>
        <span className={styles.text}>容量が90%を超えました。</span>
        <button className={styles.close}>×</button>
      </div>
      <div className={`${styles.alert} ${styles.error}`}>
        <span className={styles.icon}>×</span>
        <span className={styles.text}>接続に失敗しました。</span>
        <button className={styles.close}>×</button>
      </div>
    </div>
  );
}
