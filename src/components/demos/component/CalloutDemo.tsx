import type { DemoProps } from '../../../types';
import styles from './CalloutDemo.module.css';

export function CalloutDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={`${styles.callout} ${styles.tip}`}>
        <span className={styles.icon}>💡</span>
        <div className={styles.body}>
          <div className={styles.title}>ヒント</div>
          <div className={styles.text}>
            ⌘+K でコマンドパレットを開けます。
          </div>
        </div>
      </div>
      <div className={`${styles.callout} ${styles.note}`}>
        <span className={styles.icon}>📌</span>
        <div className={styles.body}>
          <div className={styles.title}>メモ</div>
          <div className={styles.text}>変更は自動保存されます。</div>
        </div>
      </div>
    </div>
  );
}
