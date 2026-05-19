import type { DemoProps } from '../../../types';
import styles from './SplitComplementaryDemo.module.css';

export function SplitComplementaryDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.s1} />
      <div className={styles.s2} />
      <div className={styles.s3} />
      <div className={styles.label}>base + 補色両隣</div>
    </div>
  );
}
