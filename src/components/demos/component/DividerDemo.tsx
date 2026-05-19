import type { DemoProps } from '../../../types';
import styles from './DividerDemo.module.css';

export function DividerDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <button className={styles.btn}>
        <span className={styles.g}>G</span>
        Googleで続行
      </button>
      <div className={styles.divider}>
        <span className={styles.line} />
        <span className={styles.label}>OR</span>
        <span className={styles.line} />
      </div>
      <button className={`${styles.btn} ${styles.email}`}>
        メールアドレスで続行
      </button>
    </div>
  );
}
