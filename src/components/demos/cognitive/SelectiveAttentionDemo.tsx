import type { DemoProps } from '../../../types';
import styles from './SelectiveAttentionDemo.module.css';

export function SelectiveAttentionDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <span className={styles.dim}>○</span>
        <span className={styles.dim}>○</span>
        <span className={styles.hi}>●</span>
        <span className={styles.dim}>○</span>
        <span className={styles.dim}>○</span>
      </div>
      <div className={styles.label}>視覚階層で「ここ見て」</div>
    </div>
  );
}
