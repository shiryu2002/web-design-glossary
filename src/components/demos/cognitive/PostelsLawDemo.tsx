import type { DemoProps } from '../../../types';
import styles from './PostelsLawDemo.module.css';

export function PostelsLawDemo(_: DemoProps) {
  return (
    <div className={styles.stage}>
      <div className={styles.row}><span className={styles.in}>090-1234-5678</span><span className={styles.ok}>✓</span></div>
      <div className={styles.row}><span className={styles.in}>09012345678</span><span className={styles.ok}>✓</span></div>
      <div className={styles.row}><span className={styles.in}>+81 90 1234 5678</span><span className={styles.ok}>✓</span></div>
      <div className={styles.out}>→ 090-1234-5678 に整形</div>
    </div>
  );
}
