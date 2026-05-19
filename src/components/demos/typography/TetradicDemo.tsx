import type { DemoProps } from '../../../types';
import styles from './TetradicDemo.module.css';

export function TetradicDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.grid}>
        <div className={styles.s1} />
        <div className={styles.s2} />
        <div className={styles.s3} />
        <div className={styles.s4} />
      </div>
      <div className={styles.label}>tetradic / 4色配色</div>
    </div>
  );
}
