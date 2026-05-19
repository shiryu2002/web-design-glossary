import type { DemoProps } from '../../../types';
import styles from './TonesDemo.module.css';

export function TonesDemo({ mode = 'after' }: DemoProps) {
  if (mode === 'before') {
    return (
      <div className={styles.stage}>
        <div className={styles.row}>
          <div className={styles.base} />
        </div>
        <div className={styles.label}>base のみ</div>
      </div>
    );
  }
  return (
    <div className={styles.stage}>
      <div className={styles.row}>
        <div className={styles.base} />
        <div className={styles.t1} />
        <div className={styles.t2} />
        <div className={styles.t3} />
        <div className={styles.t4} />
      </div>
      <div className={styles.label}>+ gray = tones</div>
    </div>
  );
}
